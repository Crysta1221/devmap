// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width",
      htmlAttrs: {
        lang: "ja",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/css/style.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/color-mode"
  ],
  tailwindcss: {
    cssPath: "~/assets/css/style.scss",
    configPath: "./tailwind.config.ts",
  },
  googleFonts: {
    families: {
      "Noto+Sans+JP": [400],
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  site: {
    url: "https://devmap.crystaworld1221.com",
    name: "Dev Map",
    description:
      "Dev Mapはプログラマー向けのドキュメントやロードマップ、techを紹介しています。",
    defaultLocale: "ja",
  },
  colorMode: {
    classSuffix: "",
    preference: "system"
  }
});