export class Repository {
	private storage: Storage;
	constructor(storage: Storage = localStorage) {
		this.storage = storage;
	}

	get(key: string) {
		const data = this.storage.getItem(key);

		if (!data) {
			return [];
		}

		return JSON.parse(data);
	}

	set(key: string, data: object) {
		this.storage.setItem(key, JSON.stringify(data));
	}

	remove(key: string) {
		this.storage.removeItem(key);
	}
}