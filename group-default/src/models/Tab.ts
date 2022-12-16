
import { AsyncInitialization } from '../utils/AsyncInitialization.ts';
import { TabGroup } from './TabGroup.ts';

type ChromeTabSchema = {
  // https://developer.chrome.com/docs/extensions/reference/tabs/
  id?: number;
  active: boolean;
  discarded: boolean;
  groupId: number;
  pendingUrl?: string;
  status: any;
  title?: string;
  url?: string;
  windowId: number;
}

class Tab extends AsyncInitialization {
  private _chromeTab: object;

  public groupId: number;

  public tabGroup: TabGroup;

  /* Fix curerent tab and tab group and make sure currentTab can know group.groupDefault or something */

  /* public constructor(chromeTab: ChromeTabSchema) {
    this._chromeTab = chromeTab;
    this.groupId = this._chromeTab.groupId;
    this.tabGroup = await(new TabGroup()).get(this.groupId);
    this.groupName = this.#tabGroup.title;
    this.groupDefault = this.#storeAccessor.groupDefaults.get(this.groupName); DELETE
  } */

  private initialize = async (chromeTab: ChromeTabSchema): void => {
    this._chromeTab = chromeTab;
    this.groupId = this._chromeTab.groupId;
    this.tabGroup = await (new TabGroup()).init(this.groupId);
    this.redirectToDefaultUrl();
  };

  public setCurrentUrlToDefaultForGroup = async (): void => {
    if (!this.groupId || this.groupId < 1) {
      alert('This tab is not in a group!');
    } else {
      await this.refreshChromeTab();
      await this.tabGroup.groupDefault.setUrl(this._chromeTab.url);
      // await this.storeAccessor.groupDefaults.get();
      // await chrome.storage.sync.set({ [tab.groupId]: tab.url });
    }
  };

  public static getCurrentChromeTab = async (): ChromeTabSchema => {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab ?? null;
  };

  public refreshChromeTab = async (): void => {
    this.chromeTab = await this.getCurrentChromeTab();
  };

  public redirectToDefault = (/* tab: chrome.tabs, url: string */): void => {
    const tabId = this.chromeTab.id;
    chrome.webNavigation.onCommitted.addListener(
      async function updateOnCommitted() {
        await chrome.tabs.update(tabId, { url: this.groupDefault.defaultUrl }, () => {
          alert('your default tab has been updated.');
        });
        chrome.webNavigation.onCommitted.removeListener(updateOnCommitted);
      },
    );
  };

  /* export const getCurrentTabGroupId = async () => {
        const tab = await getCurrentTab();
        return tab.groupId;
    } */

  /* getTabGroupDefault = async () => {
        const saves = this.#storeAccessor.groupDefaults;
        return saves.find(save => save.groupName === this.groupName);
    } */

  /* #getChromeTabById(tabId) {
        return await chrome.tabs.get(tabId);
    } */
}

export { Tab, ChromeTabSchema };
