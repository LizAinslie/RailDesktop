class Constants {
	public static get wsUri(): string {
		if (process.env.NODE_ENV === 'development') {
			return `ws${
				window.location.hostname === '5bc483f9f4e84933ae393db27821c476.vfs.cloud9.us-east-2.amazonaws.com'
				?
				's' : ''
			}://${window.location.hostname}:8081`;
		} else {
			return 'wss://gateway.raildesktop.xyz';
		}
	}

	public static get timeRegex(): RegExp {
		return /\d{4}-\d{2}-\d{2}T(\d{2}:\d{2}:\d{2})\.\d{3}Z/;
	}

	public static get dateRegex(): RegExp {
		return /(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:\d{2}\.\d{3}Z/;
	}
}

export default Constants;
