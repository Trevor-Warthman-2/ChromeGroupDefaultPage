class Singleton {
    static instanceCount = 0;
    constructor() {
        if (this.instancesCount !== 0) {
            throw new Error('Singletons cannot have multiple instances!');
        } else {
            this.instancesCount = this.instancesCount + 1;
        }
    }
}