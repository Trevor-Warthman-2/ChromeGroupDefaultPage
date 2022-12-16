import { isUrl } from '../utils/utilities.ts';
import { Model } from './Model.ts';
import { GroupDefaultsAccessor, GroupDefaultIdentifierTypes, GroupDefaultSchema } from '../services/GroupDefaultsAccessor.ts';

/*
CREATE a interface for Models so they all have a save and a create and get in certain formats, extending the accessor.

Ok so I made the get method call init on the model, and use the setData function here.
*/

class GroupDefault extends Model<GroupDefaultSchema, GroupDefaultIdentifierTypes> {
  private _accessor: GroupDefaultsAccessor = new GroupDefaultsAccessor();

  private _resource: GroupDefaultSchema;

  public groupName: string;

  public defaultUrl: string;

  /* constructor(groupName: string, defaultUrl: string) {
  } */

  protected async setData(/* identifier: GroupDefaultIdentifierTypes */): void {
    // this._accessor = new GroupDefaultsAccessor();
    // this._resource = this._accessor.get(identifier)
    this.groupName = this._resource.groupName;
    this.defaultUrl = isUrl(this._resource.defaultUrl, true) ? this._resource.defaultUrl : null;
    // return this;
  }
  // create interface for accessors

  /* save(): GroupDefault {
    if (this.#groupDefaultsAccessor.get(this.groupName)) {
      this.#groupDefaultsAccessor.delete(this.groupName);
    }
    this.#groupDefaultsAccessor.create(this);
    return this;
  } */
}

export { GroupDefault };
