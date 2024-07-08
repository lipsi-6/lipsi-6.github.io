const expression = document.querySelector(".output");
let ops = document.querySelectorAll(".op");
let nums = document.querySelectorAll(".num");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");
const copy = document.querySelector("#copy");
let flag = 0;


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(function() {
        console.log('Text copied to clipboard');
      })
      .catch(function(err) {
        console.error('Failed to copy text: ', err);
      });
}

function removeLastCharacter(str) {
    return str.slice(0, -1);
}

expression.onclick = function() {
    flag = 0;
    expression.textContent = removeLastCharacter(expression.textContent);
}

del.onclick = function() {
    expression.textContent = "";
    flag = 0;
}

equal.onclick = function() {
    expression.textContent = eval(expression.textContent);
    flag = 1;
}

ops.forEach(op => {
    op.onclick = function() {
        flag = 0;
        expression.textContent += op.textContent;
    };
});

nums.forEach(num => {
    num.onclick = function() {
        if(flag === 1) {
            expression.textContent = "";
            flag = 0;
        }
        expression.textContent += num.textContent;
    };
});

copy.onclick = function() {
    copyToClipboard(expression.textContent);
}