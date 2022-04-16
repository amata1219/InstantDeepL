const MENU_ID = 'TRANSLATED_AT_DEEPL';

function onClick(info, tab) {
  if (suffix != MENU_ID) return;
  
  const url = 'https://www.deepl.com/translator#en/ja/' + info.selectionText;
  const encoded = encodeURI(url);
  
  chrome.tabs.create({
    url: encoded
  });
}

chrome.contextMenus.create({
  id: MENU_ID,
  contexts: ["selection"],
  title: "DeepLで翻訳"
});

chrome.contextMenus.onClicked.addListener(onClick);
