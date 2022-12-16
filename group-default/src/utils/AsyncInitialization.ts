abstract class AsyncInitialization {
  public initialized: boolean;

  public constructor() {
    this.initialized = false;
  }

  public async init<T>(): T {
    this.initialize<T>();
    this.initialized = true;
    return this;
  }

  private abstract initialize(): void;
}

export { AsyncInitialization };
