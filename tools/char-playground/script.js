// 乱码生成器 JavaScript 功能
let stepCount = 1;

// 使用本地 UMD 文件，避免网络加载失败
const ICONV_LOCAL_PATH = 'vendor/iconv-lite-umd/iconv-lite-umd.js';

function getGlobalIconv() {
    // 该 UMD 构建会把导出的成员直接挂到全局（self/window/exports）
    // 因此不存在单一的 window.iconv 名称，而是直接提供 encode/decode 等函数。
    const g = typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {});
    if (!g) return null;
    const maybe = g;
    // 判断是否具备我们需要的 API
    if (maybe && typeof maybe.encode === 'function' && typeof maybe.decode === 'function') {
        return maybe;
    }
    // 兼容旧的命名探测
    return g.iconv || g.iconvLite || g['iconv-lite'] || g.iconv_lite || null;
}

function loadScriptOnce(url) {
    if (!window.__iconvLoadPromises) window.__iconvLoadPromises = {};
    if (window.__iconvLoadPromises[url]) return window.__iconvLoadPromises[url];
    window.__iconvLoadPromises[url] = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('脚本加载失败: ' + url));
        document.head.appendChild(s);
    });
    return window.__iconvLoadPromises[url];
}

async function ensureIconvLoaded() {
    let iconv = getGlobalIconv();
    if (iconv) return iconv;
    try {
        await loadScriptOnce(ICONV_LOCAL_PATH);
    } catch (_) {}
    return getGlobalIconv();
}

function normalizeEncodingLabel(label) {
    const l = String(label || '').toLowerCase();
    switch (l) {
        case 'utf-8':
        case 'utf8':
            return 'utf8';
        case 'gbk':
            return 'gbk';
        case 'gb2312':
            return 'gb2312';
        case 'big5':
            return 'big5';
        case 'shift-jis':
        case 'shift_jis':
        case 'sjis':
            return 'shift_jis';
        case 'euc-jp':
        case 'euc_jp':
            return 'euc-jp';
        case 'iso-8859-1':
        case 'latin1':
        case 'latin-1':
            return 'iso-8859-1';
        case 'windows-1252':
        case 'win-1252':
        case 'cp1252':
            return 'windows-1252';
        default:
            return l;
    }
}

async function convertUsingRealEncodings(text, sourceEncoding, targetEncoding) {
    const iconv = await ensureIconvLoaded();
    if (!iconv) {
        throw new Error('编码库未加载。请确认本地文件 vendor/iconv-lite-umd/iconv-lite-umd.js 存在且可访问。');
    }
    const src = normalizeEncodingLabel(sourceEncoding);
    const dst = normalizeEncodingLabel(targetEncoding);

    // 若库不支持该编码，给出明确提示
    if (typeof iconv.encodingExists === 'function') {
        if (!iconv.encodingExists(src)) {
            throw new Error('不支持的原始编码：' + sourceEncoding);
        }
        if (!iconv.encodingExists(dst)) {
            throw new Error('不支持的解析编码：' + targetEncoding);
        }
    }

    // 真实流程：以原始编码写入字节 → 以目标编码读取这些字节
    const bytes = iconv.encode(text, src);
    const result = iconv.decode(bytes, dst);
    return result;
}

// 交换当前步骤的原始编码与解析编码
function swapEncodings(stepIndex) {
    const sourceSelect = document.getElementById(`source-encoding-${stepIndex}`);
    const targetSelect = document.getElementById(`target-encoding-${stepIndex}`);
    if (!sourceSelect || !targetSelect) return;
    const temp = sourceSelect.value;
    sourceSelect.value = targetSelect.value;
    targetSelect.value = temp;
}

// 编码转换函数（真实编码转换）
async function convertText(stepIndex) {
    const inputText = document.getElementById(`input-text-${stepIndex}`).value;
    const sourceEncoding = document.getElementById(`source-encoding-${stepIndex}`).value;
    const targetEncoding = document.getElementById(`target-encoding-${stepIndex}`).value;
    const outputTextarea = document.getElementById(`output-text-${stepIndex}`);
    const continueBtn = document.querySelector(`[onclick="addNextStep(${stepIndex})"]`);
    
    if (!inputText.trim()) {
        alert('请输入要转换的文本！');
        return;
    }
    
    try {
        // 真实编码转换过程
        let result = await convertUsingRealEncodings(inputText, sourceEncoding, targetEncoding);
        
        outputTextarea.value = result;
        continueBtn.style.display = 'inline-block';
        
        // 添加转换动画效果
        outputTextarea.style.opacity = '0';
        setTimeout(() => {
            outputTextarea.style.transition = 'opacity 0.5s ease';
            outputTextarea.style.opacity = '1';
        }, 100);
        
    } catch (error) {
        outputTextarea.value = '转换出错：' + error.message;
        console.error('转换错误：', error);
    }
}

// （已移除：所有用于模拟乱码的旧函数）

// 添加下一步转换
function addNextStep(currentStep) {
    const outputText = document.getElementById(`output-text-${currentStep}`).value;
    const prevSource = document.getElementById(`source-encoding-${currentStep}`).value;
    const prevTarget = document.getElementById(`target-encoding-${currentStep}`).value;
    
    if (!outputText.trim()) {
        alert('没有可用的转换结果！');
        return;
    }
    
    const chainContainer = document.getElementById('conversion-chain');
    const newStep = document.createElement('div');
    newStep.className = 'conversion-step';
    const newIndex = stepCount;
    newStep.setAttribute('data-step', newIndex);
    
    newStep.innerHTML = `
        <div class="step-header">
            <h3>步骤 ${newIndex + 1}</h3>
            <button class="remove-step" onclick="removeStep(${newIndex})">删除</button>
        </div>
        
        <div class="input-section">
            <label for="input-text-${newIndex}">原始文本：</label>
            <textarea id="input-text-${newIndex}" class="input-text">${outputText}</textarea>
        </div>
        
        <div class="encoding-section">
            <div class="encoding-group">
                <label for="source-encoding-${newIndex}">原始编码：</label>
                <select id="source-encoding-${newIndex}" class="encoding-select">
                    <option value="utf-8">UTF-8</option>
                    <option value="gbk">GBK</option>
                    <option value="gb2312">GB2312</option>
                    <option value="big5">Big5</option>
                    <option value="shift-jis">Shift-JIS</option>
                    <option value="euc-jp">EUC-JP</option>
                    <option value="iso-8859-1">ISO-8859-1</option>
                    <option value="windows-1252">Windows-1252</option>
                </select>
            </div>
            
            <button class="swap-btn" onclick="swapEncodings(${newIndex})" title="交换原始编码与解析编码" aria-label="交换编码">⇄</button>
            
            <div class="encoding-group">
                <label for="target-encoding-${newIndex}">解析编码：</label>
                <select id="target-encoding-${newIndex}" class="encoding-select">
                    <option value="gbk">GBK</option>
                    <option value="utf-8">UTF-8</option>
                    <option value="gb2312">GB2312</option>
                    <option value="big5">Big5</option>
                    <option value="shift-jis">Shift-JIS</option>
                    <option value="euc-jp">EUC-JP</option>
                    <option value="iso-8859-1">ISO-8859-1</option>
                    <option value="windows-1252">Windows-1252</option>
                </select>
            </div>
        </div>
        
        <button class="convert-btn" onclick="convertText(${newIndex})">转换</button>
        
        <div class="output-section">
            <label for="output-text-${newIndex}">转换结果：</label>
            <textarea id="output-text-${newIndex}" class="output-text" readonly></textarea>
            <button class="continue-btn" onclick="addNextStep(${newIndex})" style="display: none;">继续转换此结果</button>
        </div>
    `;
    
    chainContainer.appendChild(newStep);
    
    // 默认将新步骤的原始编码设置为上步的解析编码，解析编码设置为上步的原始编码
    const newSource = document.getElementById(`source-encoding-${newIndex}`);
    const newTarget = document.getElementById(`target-encoding-${newIndex}`);
    if (newSource && newTarget) {
        newSource.value = prevTarget;
        newTarget.value = prevSource;
    }
    
    // 显示删除按钮（除了第一个步骤）
    updateRemoveButtons();
    
    // 滚动到新步骤
    newStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    stepCount = newIndex + 1;
}

// 删除步骤
function removeStep(stepIndex) {
    if (stepIndex === 0) {
        alert('不能删除第一个步骤！');
        return;
    }
    
    const stepElement = document.querySelector(`[data-step="${stepIndex}"]`);
    if (stepElement) {
        stepElement.style.opacity = '0';
        stepElement.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            stepElement.remove();
            updateRemoveButtons();
            renumberSteps();
        }, 300);
    }
}

// 更新删除按钮的显示状态
function updateRemoveButtons() {
    const steps = document.querySelectorAll('.conversion-step');
    steps.forEach((step, index) => {
        const removeBtn = step.querySelector('.remove-step');
        if (removeBtn) {
            removeBtn.style.display = index === 0 ? 'none' : 'inline-block';
        }
    });
}

// 重新编号步骤
function renumberSteps() {
    const steps = document.querySelectorAll('.conversion-step');
    steps.forEach((step, index) => {
        const header = step.querySelector('.step-header h3');
        if (header) {
            header.textContent = `步骤 ${index + 1}`;
        }
    });
}

// 重置全部
function resetAll() {
    if (confirm('确定要重置全部内容吗？')) {
        // 移除除第一个步骤外的所有步骤
        const steps = document.querySelectorAll('.conversion-step');
        for (let i = steps.length - 1; i > 0; i--) {
            steps[i].remove();
        }
        
        // 重置第一个步骤
        document.getElementById('input-text-0').value = '';
        document.getElementById('output-text-0').value = '';
        document.getElementById('source-encoding-0').selectedIndex = 0;
        document.getElementById('target-encoding-0').selectedIndex = 0;
        document.querySelector('[onclick="addNextStep(0)"]').style.display = 'none';
        
        stepCount = 1;
        updateRemoveButtons();
        
        // 滚动到顶部
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
    }
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加一些示例文本的提示
    const inputTextarea = document.getElementById('input-text-0');
    
    inputTextarea.addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = '试试输入一些中文文本，比如：你好世界！这是一个编码转换测试。';
        }
    });
    
    inputTextarea.addEventListener('blur', function() {
        if (!this.value) {
            this.placeholder = '请输入要转换的文本...';
        }
    });
    
    // 添加键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl+Enter 转换当前步骤
        if (e.ctrlKey && e.key === 'Enter') {
            const activeStep = document.activeElement.closest('.conversion-step');
            if (activeStep) {
                const stepIndex = activeStep.getAttribute('data-step');
                convertText(parseInt(stepIndex));
            }
        }
        
        // Ctrl+R 重置全部（阻止浏览器刷新）
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            resetAll();
        }
    });
    
    console.log('乱码生成器已加载完成！');
    console.log('快捷键：Ctrl+Enter = 转换，Ctrl+R = 重置');
});
