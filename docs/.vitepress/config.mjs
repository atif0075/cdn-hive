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
        href: "https://raw.githubusercontent.com/atif0075/cdn-hive/main/public/logo.svg",
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
