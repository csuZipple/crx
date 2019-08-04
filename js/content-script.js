const excludes = ['https://mp.csdn.net/mdeditor'];
document.addEventListener('mouseup', () => {
    excludes.some(url => location.href.indexOf(url) !== -1) && window.getSelection().toString() && document.execCommand('copy');
});
