import Vue from 'vue'
Vue.component("Bit", () => import("D:\\AAA_learning\\博客\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-8229bb4b8fb0f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\README.md").then(comp => {
        Vue.component("v-8229bb4b8fb0f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-111cf7e0ec87b",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-111cf7e0ec87b", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-874d87cfbe97d",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-874d87cfbe97d", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-faa2dd0a98146",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-faa2dd0a98146", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-179c64d0d5b65",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-179c64d0d5b65", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f575f9a60183",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-f575f9a60183", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a64b948d6f9c8",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-a64b948d6f9c8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c41b505b698a",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-2c41b505b698a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fec180d620a69",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-fec180d620a69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15fcc176ffa8d",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-15fcc176ffa8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65a8f7a5eeb1",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-65a8f7a5eeb1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c1880320c2d87",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-c1880320c2d87", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7037adc685a19",
    path: "/zh/Class/Class.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\Class\\Class.md").then(comp => {
        Vue.component("v-7037adc685a19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1b4c2d61669ac",
    path: "/zh/DesignPattern/DesignPattern.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\DesignPattern\\DesignPattern.md").then(comp => {
        Vue.component("v-1b4c2d61669ac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-39feb668b756f",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-39feb668b756f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-442c77b1c584c",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-442c77b1c584c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac73f696510d9",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-ac73f696510d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6acbdbf536edc",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-6acbdbf536edc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03ca9c777adef",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-03ca9c777adef", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-96a14808777ab",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-96a14808777ab", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-d570e697946eb",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d570e697946eb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-765e037d3ede4",
    path: "/zh/diff/diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\diff\\diff.md").then(comp => {
        Vue.component("v-765e037d3ede4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e419e08918a9",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-9e419e08918a9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-c66df6453e1f3",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-c66df6453e1f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68a93c7c9a1b",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-68a93c7c9a1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-392059255fb3e",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-392059255fb3e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-39f95f059d922",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-39f95f059d922", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1b36fcadca093",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-1b36fcadca093", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d56d0e293b096",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-d56d0e293b096", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c51ed03b8d9b4",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-c51ed03b8d9b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a84d0d99e2e75",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-a84d0d99e2e75", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e6f2555e7e2a",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-0e6f2555e7e2a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a8ae2dea26c9",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-1a8ae2dea26c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9a368d1f69a71",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-9a368d1f69a71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1ad1fa47b678",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-d1ad1fa47b678", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9cae8e4330c45",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-9cae8e4330c45", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13410d958dae3",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-13410d958dae3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-c3d173afe3ee4",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-c3d173afe3ee4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f73bb479478b4",
    path: "/zh/javascript/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\javascript\\README.md").then(comp => {
        Vue.component("v-f73bb479478b4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/index.html",
    redirect: "/zh/javascript/"
  },
  {
    name: "v-9f90aed7569a7",
    path: "/zh/javascript/types.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\javascript\\types.md").then(comp => {
        Vue.component("v-9f90aed7569a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea814c754a471",
    path: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\javascript\\原型链.md").then(comp => {
        Vue.component("v-ea814c754a471", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/原型链.html",
    redirect: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html"
  },
  {
    name: "v-af42d5396d363",
    path: "/zh/javascript/%E9%80%92%E5%BD%92.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\javascript\\递归.md").then(comp => {
        Vue.component("v-af42d5396d363", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/递归.html",
    redirect: "/zh/javascript/%E9%80%92%E5%BD%92.html"
  },
  {
    name: "v-e3340eb9af5ac",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-e3340eb9af5ac", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-9871e3a4698cd",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-9871e3a4698cd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0acb3324da9db",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-0acb3324da9db", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-d32bf9420dabc",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-d32bf9420dabc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-96a7dc6c52007",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-96a7dc6c52007", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-1c1748bd73d0b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-1c1748bd73d0b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-913e066224138",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-913e066224138", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-077a351795778",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-077a351795778", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e369e30bbc804",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-e369e30bbc804", comp.default)
        next()
      })
    }
  },
  {
    name: "v-831e9b29aadc",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-831e9b29aadc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2b4160ebb2a59",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-2b4160ebb2a59", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-6ac3ab806adae",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-6ac3ab806adae", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-25b7edd5ccaa3",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-25b7edd5ccaa3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-9818a1fa6665b",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-9818a1fa6665b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-2bf43f861f828",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-2bf43f861f828", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2abc9a89e513d",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-2abc9a89e513d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-66c894d38969d",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-66c894d38969d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-e077dc4370c42",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-e077dc4370c42", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-67009f971e53d",
    path: "/zh/rem/rem.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\rem\\rem.md").then(comp => {
        Vue.component("v-67009f971e53d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e5f319018ad3",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-6e5f319018ad3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51e0197d7fc9b",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-51e0197d7fc9b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01cc98c630063",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-01cc98c630063", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a282934e32b2",
    path: "/zh/standard/SPA.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\standard\\SPA.md").then(comp => {
        Vue.component("v-1a282934e32b2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-865ab0a265508",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-865ab0a265508", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0fe214b7684d5",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-0fe214b7684d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8b6877b68cdc",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-c8b6877b68cdc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d422f5c6e2e67",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-d422f5c6e2e67", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb2e99e9fc18c",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-fb2e99e9fc18c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-a00f9d11747c9",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-a00f9d11747c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-05630cb8c3395",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-05630cb8c3395", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-2c6240701eebc",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-2c6240701eebc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-b32cdb10ad1ea",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-b32cdb10ad1ea", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-0202270676bd1",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-0202270676bd1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-5cef87e9986f5",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-5cef87e9986f5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-4805709ca807b",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-4805709ca807b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3110e30fec948",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-3110e30fec948", comp.default)
        next()
      })
    }
  },
  {
    name: "v-80ed91abbe004",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\博客\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-80ed91abbe004", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]