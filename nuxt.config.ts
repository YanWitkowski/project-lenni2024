// https://nuxt.com/docs/api/configuration/nuxt-config
import dynamicImport from "vite-plugin-dynamic-import";
import { sort } from "vite-plugin-utils/sort-plugin";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width,height=device-height,initial-scale=1.0,minimum-scale=1,maximum-scale=1.0,user-scalable=no"
    },
  },

  css: ["@/styles/styles.less"],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
          @import "@/styles/variables.less";
          @import "@/styles/mixins.less";
          `
        }
      }
    },
    plugins: [
      sort({
        plugin: dynamicImport(),
        names: ["vite:vue", "vite:vue-jsx"],
        enforce: "post"
      }),
      svgLoader()
    ]
  },

  compatibilityDate: "2024-07-24"
})