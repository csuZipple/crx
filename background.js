chrome.contextMenus.create({
    id: 'baidu-search',
    title: '使用度娘搜索：%s',
    contexts: ['selection']
});
chrome.contextMenus.create({
    id: 'baidu-int-search',
    title: '内搜一下：%s',
    contexts: ['selection']
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    switch(info.menuItemId){
        case 'baidu-search':
            chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText)});
            break;
        case 'baidu-int-search':
            chrome.tabs.create({url: 'http://neisou.baidu.com/new/search?word=' + encodeURI(info.selectionText)});
            break;
    }
});
