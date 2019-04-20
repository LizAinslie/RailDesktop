export default class SystemUtils {
    public static hasInternet(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            require('dns').lookup('www.google.com', (err: any) => {
                if (err && err.code == "ENOTFOUND") resolve(false);
                else resolve(true);
            });
        });
    }
}