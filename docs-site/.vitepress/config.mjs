import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Claude How To Design",
  description: "Claude How To 教程项目架构设计分析 - 10大模块、47个模板、99+内置功能",
  lang: "zh-CN",
  base: "/claude-howto-design/",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "概览", link: "/overview" },
      { text: "架构", link: "/architecture" },
      { text: "模块", link: "/modules" },
      { text: "设计", link: "/design" },
    ],
    sidebar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "概览",
        link: "/overview",
      },
      {
        text: "系统架构",
        link: "/architecture",
      },
      {
        text: "10大模块",
        link: "/modules",
      },
      {
        text: "设计理念",
        link: "/design",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/luongnv89/claude-howto" },
    ],
    footer: {
      message: "基于 Claude How To 开源教程项目构建",
      copyright: "Copyright © 2024-present Claude How To Contributors",
    },
  },
});
