import Vue from 'vue'
Vue.component("Bit", () => import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-a660226f8ec09",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\README.md").then(comp => {
        Vue.component("v-a660226f8ec09", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-f61846e5de114",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\config\\README.md").then(comp => {
        Vue.component("v-f61846e5de114", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-4e9f1802a6472",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-4e9f1802a6472", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-a9a7bfa19a689",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\README.md").then(comp => {
        Vue.component("v-a9a7bfa19a689", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-0ca6f1a04624e",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-0ca6f1a04624e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e3af047c416",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-4e3af047c416", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f779bbb063e53",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-f779bbb063e53", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c27bf230ee15a",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-c27bf230ee15a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79cca1c97713c",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-79cca1c97713c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9adac24e5307e",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-9adac24e5307e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-922c98d9d43",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-922c98d9d43", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1b8038b80af2",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-d1b8038b80af2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97a7408b28bb8",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\README.md").then(comp => {
        Vue.component("v-97a7408b28bb8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-5a493b19ae07c",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-5a493b19ae07c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f72d9b7165fa2",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-f72d9b7165fa2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b2ea2438aed3",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-7b2ea2438aed3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f009492f40764",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-f009492f40764", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-212d4262c63c4",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-212d4262c63c4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-46f4e05e31d86",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-46f4e05e31d86", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-212aedf6da33",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-212aedf6da33", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-0a3fbe9a2ac44",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-0a3fbe9a2ac44", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8cc72abc1bbe8",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-8cc72abc1bbe8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0bbae90d2deaa",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-0bbae90d2deaa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e692cd490e4b1",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-e692cd490e4b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e79c72292bb9",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-8e79c72292bb9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01dcf91291aaf",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-01dcf91291aaf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-87bfe7c8054d9",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-87bfe7c8054d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-66651041431e6",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-66651041431e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-54fa832f6a8bf",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-54fa832f6a8bf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-585a2ecef7197",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-585a2ecef7197", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e8d14bd40ba4c",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-e8d14bd40ba4c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2bb27e36b7fc8",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-2bb27e36b7fc8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a1bd6c818cf4b",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-a1bd6c818cf4b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e94f7ca36153",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-8e94f7ca36153", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-2bbd3387a8007",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-2bbd3387a8007", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cd7ebd9feb5b2",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-cd7ebd9feb5b2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-0e4fa6b0afb79",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-0e4fa6b0afb79", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a43827bc2a64",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-0a43827bc2a64", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-264f87ac43faf",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-264f87ac43faf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-fd214bc998f98",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-fd214bc998f98", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-14c2fb8a68a65",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-14c2fb8a68a65", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-d655aa8051259",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-d655aa8051259", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-e342b63cb7168",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-e342b63cb7168", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03940c10ea95",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-03940c10ea95", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cb40ccb44596e",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-cb40ccb44596e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b85688e50e99",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-0b85688e50e99", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-0c45ac92cad7f",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-0c45ac92cad7f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-578aa326c427e",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-578aa326c427e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-2e5815b50bb0b",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-2e5815b50bb0b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-022e73e5abafc",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-022e73e5abafc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15131b64538d1",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-15131b64538d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-6506a2d6165e3",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-6506a2d6165e3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-61ee18244ffb",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-61ee18244ffb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-505903d95ca46",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-505903d95ca46", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a35c6d8e1e6b4",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-a35c6d8e1e6b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2badcbd135cf",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-b2badcbd135cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f01db62b17d8",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-9f01db62b17d8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d6964721d40f",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-5d6964721d40f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-155e244e857ed",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-155e244e857ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b48abc04115e8",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-b48abc04115e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc146460ca637",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-cc146460ca637", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-7c6bdb315d46f",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-7c6bdb315d46f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-257f0d1abc67b",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-257f0d1abc67b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-b3ebb3e9959d5",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-b3ebb3e9959d5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-840a7bf9ec4c7",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-840a7bf9ec4c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-2bb07949c005a",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-2bb07949c005a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-e517987f9a673",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-e517987f9a673", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-401c55133d5e7",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-401c55133d5e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e089c7fb5de89",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-e089c7fb5de89", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef357be936617",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-ef357be936617", comp.default)
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