import { env } from "@/config/env";
import { SetupServer } from "@/express/server";
import { isDev } from "@/globals/global.config";

function Main() {
	try {
		const expressApp = SetupServer();

		/**
		 * Start the server.
		 */
		expressApp.listen(env.PORT, function listenCallback() {
			console.log(`Server is running on port ${env.PORT}`);
		});
	} catch (error) {
		/**
		 * If there is an error, log it and exit the process.
		 */
		if (isDev) console.error(error);
		process.exit(1);
	}
}

Main();
