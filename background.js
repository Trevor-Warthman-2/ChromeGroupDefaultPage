
import { redirectCurrentTabToUrl, getTabGroupDefault, getStore } from './utilities.js'

chrome.runtime.onInstalled.addListener(async () => {
  chrome.tabs.onCreated.addListener( async tab => {
    if (tab.groupId !== -1) {
      const groupDefaultUrl = await getTabGroupDefault(tab.groupId);
      if (groupDefaultUrl && groupDefaultUrl !== tab.url && groupDefaultUrl !== tab.pendinguUrl) {
        console.log('redir')
        await redirectCurrentTabToUrl(tab, groupDefaultUrl);
      }
    }
  });
});