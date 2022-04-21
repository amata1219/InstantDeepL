const MENU_ID = 'TRANSLATED_AT_DEEPL';

function onClick(info, tab) {
  if (info.menuItemId != MENU_ID) return;
  
  const encoded = encodeURIComponent(info.selectionText.replaceAll('/', '\\/'));
  const url = 'https://www.deepl.com/translator#en/ja/' + encoded;
  
  chrome.tabs.create({
    url: url
  });
}

chrome.contextMenus.create({
  id: MENU_ID,
  contexts: ["selection"],
  title: "DeepLで翻訳"
});

chrome.contextMenus.onClicked.addListener(onClick);
