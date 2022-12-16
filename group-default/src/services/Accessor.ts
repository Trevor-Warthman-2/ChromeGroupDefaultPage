import { Map } from 'typescript';
import { AsyncInitialization } from '../utils/AsyncInitialization.ts';

/*
Todo: Define an API up here for outward facing methods
make internal methods private
*/
abstract class Accessor<ResourceSchema, ResourceIdentifierTypes> extends AsyncInitialization {
  protected abstract _collectionKey: string;

  protected abstract _identifierToValidationMap: Map<string, (value: ResourceIdentifierTypes) => boolean>;

  private _resources: Array<ResourceSchema> = [];

  private initialize(): void {
    this.#resources = await this.fetchResources();
  }

  private async fetchResources(): Array<ResourceSchema> {
    return chrome.storage.sync.get(this.collectionKey);
  }

  private async setResources(newResources: Array<ResourceSchema>): void {
    const replacement = {};
    replacement[this._collectionKey] = newResources;
    await chrome.storage.sync.set(replacement);
    this.refreshCollection();
  }

  private async refreshCollection(): void {
    this._resources = await this.fetchResources();
  }

  private async pushToCollection(resource: ResourceSchema): void {
    const currentCollection = this._resources;
    const newCollection = currentCollection.push(resource);
    this.setResources(newCollection);
  }

  private async popFromCollection(exactRecord: ResourceSchema): void {
    const currentCollection = this._resources;
    const newCollection = currentCollection.filter((resource: ResourceSchema) => resource !== exactRecord);
    await this.setResources(newCollection);
  }

  // Accessor API to be used by extending Accessors

  public getAll(): Array<ResourceSchema> {
    return this._resources;
  }

  public get(identifierValue: ResourceIdentifierTypes): ResourceSchema {
    this._identifierToValidationMap.forEach((validation: (value: ResourceIdentifierTypes) => boolean, identifier: string) => {
      if (validation(identifierValue)) {
        return this.getByField(identifier, identifierValue);
      }
    });
    throw new Error(`get() call identifierValue was type ${typeof identifierValue} which is not a valid type for this resource`);
  }

  private getByField(identifyingProperty: string, identifyingPropertyValue: ResourceIdentifierTypes): ResourceSchema {
    return this.#collection.find((resource: ResourceSchema) => resource[identifyingProperty] === identifyingPropertyValue);
  }

  public async create(resource: ResourceSchema): void {
    await this.pushToCollection(resource);
  }

  public delete(resourceId: number): ResourceSchema {
    const recordToDelete = this._resources.find((resource: ResourceSchema) => resource.id === resourceId);
    await this.popFromCollection(recordToDelete);
    return recordToDelete;
  }
}

export { Accessor };
