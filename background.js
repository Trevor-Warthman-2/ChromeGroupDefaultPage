
import { redirectCurrentTabToUrl, getTabGroupDefault, getAllSavedDefaults } from './utilities.js'

const x = async () => {
  console.log(await getAllSavedDefaults())
}
x();
chrome.runtime.onInstalled.addListener(async () => {
  chrome.tabs.onCreated.addListener( async tab => {
    if (tab.groupId !== -1) {
      await applyDefault(tab);
    }
  });
});

async function applyDefault(tab) {
  const groupDefaultUrl = await getTabGroupDefault(tab.groupId);
      if (groupDefaultUrl && groupDefaultUrl !== tab.url && groupDefaultUrl !== tab.pendinguUrl) {
        redirectCurrentTabToUrl(tab, groupDefaultUrl);
      }
}