import { Tab, ChromeTabSchema } from './models/Tab.ts';

console.log('Hello Background');

applyDefaultsToNewTabs();

const applyDefaultsToNewTabs = async (): void => {
  chrome.runtime.onInstalled.addListener(async () => {
    chrome.tabs.onCreated.addListener(async (chromeTab: ChromeTabSchema) => {
      if (chromeTab.groupId !== -1) {
        await applyDefault(chromeTab);
      }
    });
  });
};

const applyDefault = async (chromeTab: ChromeTabSchema): void => {
  const currentTab = new Tab().init(chromeTab);
  currentTab.redirectToDefault();
  /* const groupDefaultUrl = await getTabGroupDefault(chromeTab.groupId);
            if (groupDefaultUrl && groupDefaultUrl !== chromeTab.url && groupDefaultUrl !== chromeTab.pendinguUrl) {
              redirectCurrentTabToUrl(chromeTab, groupDefaultUrl);
              this.currentTab = new CurrentTab();
            } */
};
