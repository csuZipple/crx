const excludes = ['https://mp.csdn.net/mdeditor'];
const injectJs = path => {
    path = path || 'js/inject.js';
    let temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(path);
    temp.onload = function(){
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
};
document.addEventListener('mouseup', () => {
    excludes.some(url => location.href.indexOf(url) === -1)
    && window.getSelection().toString()
    && document.execCommand('copy');
});
injectJs();

console.log(`
【注意】：本插件修改了部分全局样式，请在业务开发网页禁用此插件。

【样式】：
    body{
        background: lightblue;
    }
    *{
        user-select: text !important; /*允许所有dom节点被选中*/
    }
    --------------------------------------------------------
    Made by Zipple.
`);
