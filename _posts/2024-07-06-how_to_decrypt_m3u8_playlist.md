---
title: 如何解码加密的 m3u8 播放列表
date: 2024-07-06 22:12:00 +0800
author: lipsi
categories: [教程, 编程]
---

### 准备工具
电脑一台、HxD、OpenSSL、ffmpeg

### m3u8 播放列表
我们先来看看一个经过加密的 m3u8 播放列表长什么模样，以下是一个具有加密的 m3u8 播放列表的前面一部分
```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:11
#EXT-X-KEY:METHOD=AES-128,URI=".../taskflow/harpocrates/rose/b3f48a4fc5bb4dabb495d97b420c0117"
#EXTINF:10.077000,
segment_0.ts
#EXTINF:10.157000,
segment_1.ts
#EXTINF:10.077000,
segment_2.ts
#EXTINF:10.076000,
segment_3.ts
...
```
`#EXTM3U` 指明了这是一个 m3u8 文件；  
`#EXT-X-VERSION` 表明 m3u8 版本为 3；  
`#EXT-X-MEDIA-SEQUENCE` 指起始媒体段的序列号，这个文件中里是 0；  
`#EXT-X-TARGETDURATION` 表示媒体段的最大持续时间，这里是 11，可以看到，后续列出的前三个媒体段持续时长都没有超过 11 秒；  
`#EXT-X-KEY:METHOD=AES-128,URI=".../taskflow/harpocrates/rose/b3f48a4fc5bb4dabb495d97b420c0117"` 这一行写出了加密信息：加密方法是 AES-128，加密所用密钥的 URI 为 `.../taskflow/harpocrates/rose/b3f48a4fc5bb4dabb495d97b420c0117`；  
接下来就是每个媒体段的信息，`#EXTINF` 表示该媒体段的持续时长，`segment_0.ts` 是该媒体段的 URI，后面的均为如此。

我们举例使用的这个 m3u8 播放列表的 URI 为 `.../play/0/harpocrates/2024/02/21/e876ca5f1941456da026698b234daba2/0/playlist.m3u8`，因而每一个媒体段的 URI 为 `.../play/0/harpocrates/2024/02/21/e876ca5f1941456da026698b234daba2/0/segment_{}.ts`。

### 解密
通过以上 URI，我们可以下载加密密钥以及所有媒体段，接下来就要进行解密工作了。

通过密钥的 URI 直接下载下来的文件用记事本查看，是这样的：
```
b2984d60116911ef
```
但是使用 AES-128 加密使用的密钥是 32 个字符，我们需要使用 HxD，得到转化后的结果：
```
62 32 39 38 34 64 36 30 31 31 36 39 31 31 65 66
```
实质上，是将这些字符对应到他们在 ACSCII 码表中的序号的 16 进制表示。例如，b 在 ACSCII 码表中的序号为 98，用 16 进制表示就是 62。将这些 16 进制码连起来，就得到我们需要的密钥。接下来需要使用 OpenSSL 来解密这些 `.ts` 文件，其中还需要用到偏移量 `iv`，同样是 32 个字符。在 m3u8 播放列表里没有提到偏移量，因此一般是 0，使用时也就是 32 个 0。

接下来，创建一个 `.py` 文件，包含如下代码：
```python
import subprocess
import os

# 加密密钥和IV（如果IV未指定，使用32个零）
key = "62323938346436303131363931316566"
iv = "00000000000000000000000000000000"

# 相对路径
encrypted_files_path = "./encrypted_files/"
decrypted_files_path = "./decrypted_files/"

# 创建解码文件夹（如果不存在）
os.makedirs(decrypted_files_path, exist_ok=True)

# 解码文件列表
decrypted_files = []

# 解码所有文件
for i in range(716):
    encrypted_file = os.path.join(encrypted_files_path, f"segment_{i}.ts")
    decrypted_file = os.path.join(decrypted_files_path, f"decrypted_segment_{i}.ts")
    decrypted_files.append(encrypted_file)

    # OpenSSL命令
    cmd = [
        "openssl", "aes-128-cbc", "-d",
        "-in", encrypted_file,
        "-out", decrypted_file,
        "-K", key,
        "-iv", iv
    ]

    # 执行命令
    try:
        subprocess.run(cmd, check=True)
        print(f"Decrypted {encrypted_file} to {decrypted_file}")

    except subprocess.CalledProcessError as e:
        print(f"Error decrypting {encrypted_file}: {e}")
        break
    except FileNotFoundError as e:
        print(f"File not found: {e}")
        break

# 删除所有加密文件
for encrypted_file in decrypted_files:
    try:
        os.remove(encrypted_file)
        print(f"Deleted {encrypted_file}")
    except FileNotFoundError as e:
        print(f"File not found: {e}")
        continue

print("Decryption and deletion process completed.")
```

本次解密中，使用的 key 为 `62323938346436303131363931316566`，文件范围为 0 ~ 715。

在命令行中执行该 python 代码，即可实现 `.ts` 文件的解密（同时删除了原加密文件）。这样，我们得到了若干细碎的可播放的视频片段，最后一步，是使用 ffmpeg 将所有视频段合成一个完整的视频。

为了将 700 多个 `.ts` 文件合成一个大文件，我们需要创建一个包含这 700 多个文件名的 `.txt` 文件，可使用如下 python 代码：
```python
# 文件路径列表
file_paths = [
    "...\\decrypted_segment_{}.ts".format(i) #使用你自己的路径
    for i in range(715)
]

# 打开文件以写入内容
with open("list.txt", "w") as file:
    # 遍历文件路径列表，写入每个文件路径到文件中
    for path in file_paths:
        file.write("file '{}'\n".format(path))
```
这样得到的列表效果如下：
```
file '...\decrypted_segment_0.ts'
file '...\decrypted_segment_1.ts'
file '...\decrypted_segment_2.ts'
file '...\decrypted_segment_3.ts'
...
```
而后，在命令行中，使用命令
```powershell
ffmpeg -f concat -safe 0 -i list.txt -c copy output.mp4
```
即可将列表中包含的所有文件合并成一个可播放的大型文件。大功告成！

### 附
ffmpeg 关于合并多个文件的官方 Wiki：<https://trac.ffmpeg.org/wiki/Concatenate>