import { AsyncInitialization } from '../utils/AsyncInitialization.ts';
import { GroupDefault } from './GroupDefault.ts';

type TabGroupIdentifier = number;

type TabGroupSchema = {
  // https://developer.chrome.com/docs/extensions/reference/tabGroups/#type-TabGroup
  id: number;
  title: string;
  color: string;
  windowId: number;
}

class TabGroup extends AsyncInitialization {
  // groupDefaultsAccessor: GroupDefaultsAccessor;

  public groupDefault: GroupDefault;

  public groupId: number = null;

  public name: string = null;

  public color: string = null;

  private _chromeTabGroup: TabGroupSchema;

  /* constructor() {
    this.#groupDefaultsAccessor = new GroupDefaultsAccessor();
  } */

  private initialize = async (groupId: TabGroupIdentifier): TabGroup => {
    this.groupId = groupId;
    this._chromeTabGroup = await this.fetchFromChrome();
  };

  /* async #initializeFromIdentifier(identifier: TabGroupIdentifier): void {
    if (typeof identifier === 'number') {
      this.#initializeFromGroupId(identifier);
    }
  } */

  /* async #initializeFromGroupId(groupId: number): void {
    this.groupId = groupId;
    this.#chromeTabGroup = this.#getChromeTabGroup();
    this.name = this.#chromeTabGroup.name;
    this.color = this.#chromeTabGroup.color;
    this.name = this.#chromeTabGroup.name;
    this.groupDefault = this.#groupDefaultsAccessor.groupDefaults.get(this.groupName);
  } */

  public fetchFromChrome = async (): TabGroupSchema => chrome.tabGroups.get(this.groupId);
}

export { TabGroup, TabGroupSchema };
