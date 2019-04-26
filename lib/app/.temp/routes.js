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
    name: "v-0676e1ef42a3b",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\README.md").then(comp => {
        Vue.component("v-0676e1ef42a3b", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-37d41716e4b83",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\config\\README.md").then(comp => {
        Vue.component("v-37d41716e4b83", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-15c0be11fbc84",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-15c0be11fbc84", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-71cf8437d79ae",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\README.md").then(comp => {
        Vue.component("v-71cf8437d79ae", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-ef0484ed3c44f",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-ef0484ed3c44f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec593ee3e8894",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-ec593ee3e8894", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c9ac605fffafd",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-c9ac605fffafd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f0d92df490e3",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-6f0d92df490e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d9f6a0617b649",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-d9f6a0617b649", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fff590f3b8be5",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-fff590f3b8be5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e84a14f468bc",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-7e84a14f468bc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-02585103f04da",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-02585103f04da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4464ba2e7154",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\README.md").then(comp => {
        Vue.component("v-b4464ba2e7154", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-831817a0834e8",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-831817a0834e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3059b9385bb38",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-3059b9385bb38", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b8b2302109495",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-b8b2302109495", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2e9a5c121d9a",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-b2e9a5c121d9a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-0074af2819527",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-0074af2819527", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-a97979524165e",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-a97979524165e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-f567d2910664a",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-f567d2910664a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-2ec02df4403d6",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-2ec02df4403d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-797c0a8a94def",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-797c0a8a94def", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f9e277f93702",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-8f9e277f93702", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ca83e02b7e61",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-0ca83e02b7e61", comp.default)
        next()
      })
    }
  },
  {
    name: "v-997eedba49f06",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-997eedba49f06", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69019fadbc69e",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-69019fadbc69e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e33a6ff2f4d6",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-4e33a6ff2f4d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d246fbe980112",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-d246fbe980112", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3d95117b3bea8",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-3d95117b3bea8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c21f9453fa49a",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-c21f9453fa49a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b7b7b2f72095",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-6b7b7b2f72095", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d5e2d5103366",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-6d5e2d5103366", comp.default)
        next()
      })
    }
  },
  {
    name: "v-59f61c89202cc",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-59f61c89202cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5977c6aa6291e",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-5977c6aa6291e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-6e53bce85c68e",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-6e53bce85c68e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b694caf22f8d",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-4b694caf22f8d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-c60a4b46bd71b",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-c60a4b46bd71b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-194672f194e55",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-194672f194e55", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-d67b27003a9b6",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-d67b27003a9b6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-fbce0c7840a2b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-fbce0c7840a2b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-30dee80997b91",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-30dee80997b91", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-cb9f53265ae79",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-cb9f53265ae79", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-f7f9254c9bf71",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-f7f9254c9bf71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a608cef36abd4",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-a608cef36abd4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5db16d4d0dc57",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-5db16d4d0dc57", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c06cee968923",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-2c06cee968923", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-ea49b866d930e",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-ea49b866d930e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-e7a3a34b7d8ea",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-e7a3a34b7d8ea", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-4839c1882c01c",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-4839c1882c01c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-4cacce437b883",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-4cacce437b883", comp.default)
        next()
      })
    }
  },
  {
    name: "v-186427e7e2b2f",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-186427e7e2b2f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-87868667268b8",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-87868667268b8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-96ad13d19c74a",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-96ad13d19c74a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-2e88f0473dcdf",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-2e88f0473dcdf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bd340eb28f37f",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-bd340eb28f37f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ddc9e2a8c644",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-7ddc9e2a8c644", comp.default)
        next()
      })
    }
  },
  {
    name: "v-172ded5838eef",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-172ded5838eef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-72486941dc155",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-72486941dc155", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ae790c9357e5",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-9ae790c9357e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc7311637eadd",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-fc7311637eadd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a18d7bad6689",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-8a18d7bad6689", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-f94b1528ee643",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-f94b1528ee643", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e0ed2e85ac4f",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-1e0ed2e85ac4f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-2384be0309dd5",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-2384be0309dd5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-9ac67b3153168",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-9ac67b3153168", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-c145cd73ff99c",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-c145cd73ff99c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-f6b9515b4e5f1",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-f6b9515b4e5f1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-989e9ba655fc2",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-989e9ba655fc2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-90244451a8a1b",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-90244451a8a1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-42434b6d1166e",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\datum\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-42434b6d1166e", comp.default)
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