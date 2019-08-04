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
    console.log('injected!')
};
document.addEventListener('mouseup', () => {
    excludes.some(url => location.href.indexOf(url) === -1) && window.getSelection().toString() && document.execCommand('copy');
});
injectJs();
