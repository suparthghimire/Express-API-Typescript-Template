import { resolve } from "node:path";

export default {
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
};
