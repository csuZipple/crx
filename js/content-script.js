document.addEventListener('mouseup', function() {
    let text = window.getSelection().toString(); //获取被选中的文字
    if(text){
        document.execCommand('copy');
    }
});
