
/**
 * Models may use .save, .destroy, or get.
 * new Model().save will create a new or overwrite.
 * new Model().get(id) will pull from an existing resource
 * add destory to destroy.
 *
 * Note: MOdels get init() ed in their get method so no need to init.
 */
abstract class Model<ResourceSchema, ResourceIdentifierTypes>/* extends AsyncInitialization */ {
    public abstract id: number;

    private abstract _accessor;

    private abstract _resource;

    // public abstract constructor();

    // public abstract async init(record: ResourceSchema): Model;

    /* protected initialize(identifier): void {
        this._resource = get(identifier); // where shit must be set from accessor.
    } */

    // Serialize class <Resource> into an object of the format <ResourceSchema> that can be read by chrome storage
    // public abstract toResource<Resource>(): Resource;
    // const {...object} = classInstance

    public async init(identifier: ResourceIdentifierTypes): Model {
      // const record = this._accessor.get(identifier);
      this._accessor.init();
      this._record = this._accessor.get(identifier);
      this.setData();
      return this;// this.init<ResourceSchema>(record);
    }

    public async save(): Model {
      if (this._accessor.get(this.id)) {
        await this._accessor.delete(this.id);
      }
      await this._accessor.create(this._resource);
      return this;
    }

    public async destroy(): Model {
      await this._accessor.delete(this.id);
      return this;
    }
}

export { Model };
