import { defineConfig } from "@playwright/test";

const baseURL = process.env.BASE_URL || "https://landing-engine-gamma.vercel.app";

export default defineConfig({
	testDir: "tests/e2e",
	timeout: 180000,
	fullyParallel: false,
	workers: 1,
	retries: 0,
	reporter: [["list"]],
	use: {
		baseURL,
		channel: "chrome",
		headless: true,
		ignoreHTTPSErrors: true,
		viewport: { width: 1280, height: 800 },
		actionTimeout: 8000,
		screenshot: "off",
		video: "off",
		trace: "off",
	},
});
