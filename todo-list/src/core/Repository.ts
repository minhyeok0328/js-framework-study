export class Repository {
	private storage: Storage;
	constructor(storage: Storage = localStorage) {
		this.storage = storage;
	}

	get(key: string) {
		const item = this.storage.getItem(key);

		if (!item) {
			return [];
		}

		return JSON.parse(item);
	}

	set(key: string, item: object) {
		this.storage.setItem(key, JSON.stringify(item));
	}

	remove(key: string) {
		this.storage.removeItem(key);
	}
}