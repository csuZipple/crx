document.addEventListener('mouseup', function() {
    // let text = window.getSelection().toString(); //获取被选中的文字
    document.execCommand('copy');
});
