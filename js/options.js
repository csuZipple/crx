let $ = document.querySelector.bind(document);
let key = 'whiteListUrl';
// Todo：storage的用法以及options.html如何调试？
$('#url-input').addEventListener('keyup', function (event) {
    let value = this.value;
    if(event.keyCode === 13 && regUrl(value)){
        insertUrlItem(value);
        chrome.storage.sync.get([key], ret =>{
            if(isNotInArray(ret[key], value)){
                ret[key].push(value);
                chrome.storage.sync.set({[key]: ret.key});
            }
        });
        this.value = ''
    }
});
chrome.storage.sync.get([key], ret => {
    if(ret[key] && ret[key].length){
        console.log('options', 'get white list');
        ret[key].forEach(url => {
            insertUrlItem(url)
        })
    }else{
        chrome.storage.sync.set({[key]: []});
    }
});
function insertUrlItem(url){
    // let node = `<li><span>${url}</span><button onclick="delUrl(this)">删除</button></li>`;
    let node = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = url;
    let button = document.createElement('button');
    button.innerText = '删除';
    button.setAttribute('onclick', function () {
        delUrl(this)
    });
    node.appendChild(span);
    node.appendChild(button);
    $('.url-list').prepend(node)
}
function delUrl(self){
    self.parentNode.removeChild(self);
    chrome.storage.sync.get([key], ret =>{
        ret[key] = ret[key].filter(it => it !== self.value);
        chrome.storage.sync.set({[key]: ret.key});
    });
}

function isNotInArray(arr, url){
    return arr.every(it => it !== url)
}
//匹配 xyz.com此类URL
function regUrl(url){
    return /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/.test(url)
}
