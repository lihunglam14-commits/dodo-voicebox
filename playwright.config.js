import { defineConfig } from "@playwright/test";

const origin = "http://127.0.0.1:4180";
const baseURL = `${origin}/dodo-voicebox/`;

export default defineConfig({
  testDir: "./tests",
  workers: 1,
  use: { baseURL, browserName: "chromium" },
  webServer: {
    command: "npm run preview -- --port 4180 --strictPort",
    url: baseURL,
  },
});
