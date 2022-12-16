import { Tab } from "../Models/CurrentTab";
import { Singleton } from '../Singleton';

export class BackgroundSession extends Singleton {
    currentTab = null;
    constructor() {
        super();
        this.#applyDefaultsToNewTabs();
    }

    #applyDefaultsToNewTabs = async () => {
        chrome.runtime.onInstalled.addListener(async () => {
            chrome.tabs.onCreated.addListener( async chromeTab => {
              if (chromeTab.groupId !== -1) {
                await this.#applyDefault(chromeTab);
              }
            });
          }); 
    }

    #applyDefault = async (chromeTab) => {
      const currentTab = new Tab().init(chromeTab);
      currentTab.redirectToDefault();
        /* const groupDefaultUrl = await getTabGroupDefault(chromeTab.groupId);
            if (groupDefaultUrl && groupDefaultUrl !== chromeTab.url && groupDefaultUrl !== chromeTab.pendinguUrl) {
              redirectCurrentTabToUrl(chromeTab, groupDefaultUrl);
              this.currentTab = new CurrentTab();
            } */
      } 
}

export const backgroundSessionSingleton = new BackgroundSession();