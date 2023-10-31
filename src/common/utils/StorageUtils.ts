export default class StorageUtils {

    static getItems(key: string): Record<string, string>[] {
        const data = localStorage.getItem(key);
        if (data !== null) {
            return JSON.parse(data);
        }
        return [];
    }

    static storeItem(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}