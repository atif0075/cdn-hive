import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CDN Hive",
  description: "Generate Free CDN,It's Open Source",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/atif0075/cdn-hive/49a05395cce27d6c6e586a8522b51dc111ff525b/public/logo.svg",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "ReoTTcKgUwVb6_Ls2uHpr7AnrGBZq_Gf8k7dvKm_Y3c",
      },
    ],
  ],
  sitemap: {
    hostname: "https://cdn-hive.vercel.app/",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
