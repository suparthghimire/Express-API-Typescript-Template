import { env } from "@/config/env";
import { SetupServer } from "@/express/server";

function Main() {
	try {
		const expressApp = SetupServer();

		/**
		 * Start the server.
		 */
		expressApp.listen(env.port, function listenCallback() {
			console.log(`Server is running on port ${env.port}`);
		});
	} catch (error) {
		/**
		 * If there is an error, log it and exit the process.
		 */
		if (env.isDev) console.error(error);
		process.exit(1);
	}
}

Main();
