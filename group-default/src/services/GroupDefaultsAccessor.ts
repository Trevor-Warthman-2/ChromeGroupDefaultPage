import { Map } from 'typescript';
import { Accessor } from './Accessor.ts';
import { isUrl } from '../utils/utilities.ts';

/**
 * Todo
 * - Change class memebers to be like the one below (initialized and given value at same time)
 * - remove references to store
 * - // REQUIRE ESLINT TO ERROR IF THERE IS AN UNIMPLEMENTED INTERFACE METHOD
 * - make an interface for accessors or put some abstract stuff in the accessor.ts file.
 * - in here we probably need get, create, delete, update. In the actualy GroupDefault file we'll just have .save and .new and .delete.
 * - remember to init this accessor
 */

type GroupDefaultSchema = {
  groupId: number;
  groupName: string;
  defaultUrl: string;
}

type GroupDefaultIdentifierTypes = number | string;

/**
 * Create a new instance of this class with "const accessor = await (new GroupDefaultsAccessor()).init()"
 */
class GroupDefaultsAccessor extends Accessor<GroupDefaultSchema, GroupDefaultIdentifierTypes> {
  protected collectionKey: string = 'groupDefaults';

  protected _identifierToValidationMap: Map = new Map([
    ['id', (value: GroupDefaultIdentifierTypes): boolean => typeof value === 'number'],
    ['defaultUrl', (value: GroupDefaultIdentifierTypes): boolean => typeof value === 'string' && isUrl(value)],
    ['name', (value: GroupDefaultIdentifierTypes): boolean => typeof value === 'string'],
  ]);

  // move this to be abstracted in the accessor file
  /* async #refreshGroupDefaults(): void {
    this.#store = await getAllGroupDefaults();
  } */

  /* get(identificationValue: GroupDefaultIdentifierKeys): GroupDefault {
     if (typeof propertyValue === 'number') {
      return this.#getByField('id', propertyValue);
    } if (typeof propertyValue === 'string' && isUrl(propertyValue)) {
      return this.#getByField('defaultUrl', propertyValue);
    }
    if (typeof propertyValue === 'string') {
      return this.#getByField('name', propertyValue);
    }
    identifierToValidationMap.forEach((validation: ArrowFunction, identifier: string) => {
      if (validation(identificationValue)) {
        return this.#getByField(identifier, identificationValue);
      }
    });
    throw new Error('Bad type for getGroupDefault propertyValue');
  } */

  // abstract this out too probably in the accessor file
  /* #getByField(identifyingProperty: string, identifyingPropertyValue: GroupDefaultIdentifierKeys): GroupDefault {
    return this.#groupDefaults.find((groupDefault: GroupDefault) => groupDefault[identifyingProperty] === identifyingPropertyValue);
  } */

  /* async create(groupDefault: GroupDefault): void {
    await this.#addSaveToStore(groupDefault);
    this.#refreshGroupDefaults(); // this.#refreshStore
  } */

  /* deleteById(groupId: GroupDefault): void {
    const toDelete = this.#getAllGroupDefaults.find((groupDefault: GroupDefault) => groupDefault.id === groupId);
    toDelete.forEach(async (groupDefaultToDelete: GroupDefault) => {
      await this.#removeSaveFromStore(groupDefaultToDelete);
    });
    this.#refreshGroupDefaults();
  } */

  /* async #getAllGroupDefaults(): Array<GroupDefault> {
    const store: Store = await this.getStore();
    return store.groupDefaults;
  } */

  /* async #addSaveToStore(groupDefault: GroupDefault): GroupDefault {
    const groupDefaults = await this.#getAllGroupDefaults();
    groupDefaults.push(groupDefault);
    await chrome.storage.sync.set({ groupDefaults }); // ABSTRACT THIS AND CALL Store.something here
    // await chrome.storage.sync.set({ [tab.groupId]: tab.url });
  }

  async #removeSaveFromStore(groupDefault: GroupDefault): void {
    const groupDefaults = await this.#getAllGroupDefaults();
    groupDefaults.filter((currentDefault: GroupDefault) => currentDefault !== groupDefault);
    await chrome.storage.sync.set({ groupDefaults });
  } */
}

export { GroupDefaultsAccessor, GroupDefaultSchema, GroupDefaultIdentifierTypes };
