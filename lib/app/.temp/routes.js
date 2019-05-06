import Vue from 'vue'
Vue.component("Bit", () => import("D:\\AAA_learning\\实训一\\博客\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-904182291703e",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\README.md").then(comp => {
        Vue.component("v-904182291703e", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-069b731866131",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-069b731866131", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-07ad3122faabf",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-07ad3122faabf", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-5b198b32d8db7",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-5b198b32d8db7", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-94d25a895e718",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-94d25a895e718", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d21a8f5a933d2",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-d21a8f5a933d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0452efbc7aea7",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-0452efbc7aea7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f756048200634",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-f756048200634", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad7d906f48f0f",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-ad7d906f48f0f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f335ba7ee55f4",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-f335ba7ee55f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e83eea415041a",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-e83eea415041a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc69dfd737b1f",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-fc69dfd737b1f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c7fea09fc2145",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-c7fea09fc2145", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-5bbc2ba76a36",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-5bbc2ba76a36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd9261ad3acbd",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-fd9261ad3acbd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8997f43b64d93",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-8997f43b64d93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fae596de829ff",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-fae596de829ff", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-39e67669dafd6",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-39e67669dafd6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-223cb653b0322",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-223cb653b0322", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-14adb0a079eed",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-14adb0a079eed", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-7874fafbeccb5",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-7874fafbeccb5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5fc031f870144",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-5fc031f870144", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a141b78e9b716",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-a141b78e9b716", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bbbc770e48a4a",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-bbbc770e48a4a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cae4899f0ffb4",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-cae4899f0ffb4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d403039433b6",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-2d403039433b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47077fdb0968f",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-47077fdb0968f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b3061d3d50e93",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-b3061d3d50e93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e62238f6a2cea",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-e62238f6a2cea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-35a7980b657f2",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-35a7980b657f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-87bccc6de72ea",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-87bccc6de72ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f05997d99543",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-8f05997d99543", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5f1311d0290b4",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-5f1311d0290b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26881cd37d111",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-26881cd37d111", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-1453b9a5b8b71",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-1453b9a5b8b71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad5cea8c4604d",
    path: "/zh/javascript/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\README.md").then(comp => {
        Vue.component("v-ad5cea8c4604d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/index.html",
    redirect: "/zh/javascript/"
  },
  {
    name: "v-d30f48871c5dd",
    path: "/zh/javascript/types.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\types.md").then(comp => {
        Vue.component("v-d30f48871c5dd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-54ebd16474ec4",
    path: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\原型链.md").then(comp => {
        Vue.component("v-54ebd16474ec4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/原型链.html",
    redirect: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html"
  },
  {
    name: "v-7aa151edb21b3",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-7aa151edb21b3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-89a9534945d97",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-89a9534945d97", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d40656437227",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-5d40656437227", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-1ddadb6f117b2",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-1ddadb6f117b2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-56d1bac47cc77",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-56d1bac47cc77", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-06b2481518266",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-06b2481518266", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-4bdc12b8517dd",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-4bdc12b8517dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-3d5c48d63ecd",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-3d5c48d63ecd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b7444f7996d2a",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-b7444f7996d2a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-24c1c8608b9c4",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-24c1c8608b9c4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-05cdb0e9c5ede",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-05cdb0e9c5ede", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-199533a7a121b",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-199533a7a121b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-77d64b50381f8",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-77d64b50381f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-746dd03642c9e",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-746dd03642c9e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-676cded340b62",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-676cded340b62", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b13bd0a7a0c7",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-7b13bd0a7a0c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-2bacc42556e58",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-2bacc42556e58", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-70ec8b7cd85fc",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-70ec8b7cd85fc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-03faccbcbd763",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-03faccbcbd763", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0447eeaadb2f",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-c0447eeaadb2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-18849b554d9c9",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-18849b554d9c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-706265fd3adc5",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-706265fd3adc5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8f5cce338442",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-c8f5cce338442", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6ddcede0d01cc",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-6ddcede0d01cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e270d08001af6",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-e270d08001af6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a1362029aed4",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-7a1362029aed4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-314532f5537e4",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-314532f5537e4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71f37d8f25b83",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-71f37d8f25b83", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-0ba450abe314a",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-0ba450abe314a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-518a06ee69e2a",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-518a06ee69e2a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-49b44e04f323",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-49b44e04f323", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-151de1c8661a3",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-151de1c8661a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-eb44df4d82e68",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-eb44df4d82e68", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8eab865ae81af",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-8eab865ae81af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ecb0f23f9635",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-2ecb0f23f9635", comp.default)
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