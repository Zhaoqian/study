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
    name: "v-b1f96778af79d",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\README.md").then(comp => {
        Vue.component("v-b1f96778af79d", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-27bc1ddc14bf8",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-27bc1ddc14bf8", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-730607f809ae1",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-730607f809ae1", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-0027aed94e417",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-0027aed94e417", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-b16543c2cc317",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-b16543c2cc317", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d30fe8404d7a1",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-d30fe8404d7a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2b30f7b5a4ce",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-e2b30f7b5a4ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d256017a2cb47",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-d256017a2cb47", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4eb616b93d0c",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-b4eb616b93d0c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e7345e02379d5",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-e7345e02379d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-640559aaeddef",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-640559aaeddef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0fe84e53e55d6",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-0fe84e53e55d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60d1db5bfde9e",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-60d1db5bfde9e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-5f12a95f3de05",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-5f12a95f3de05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e1d215fca1e3",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-0e1d215fca1e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-541501426e8d5",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-541501426e8d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-779c5353147c4",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-779c5353147c4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-6475398578d2f",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-6475398578d2f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-22785caf044d5",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-22785caf044d5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-8c04d8e2d2cda",
    path: "/zh/diff/diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\diff\\diff.md").then(comp => {
        Vue.component("v-8c04d8e2d2cda", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34779a8919b4c",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-34779a8919b4c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-7a929724ecad7",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-7a929724ecad7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f5341137c902",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-8f5341137c902", comp.default)
        next()
      })
    }
  },
  {
    name: "v-80d0e8ad5bf49",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-80d0e8ad5bf49", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28271394bd912",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-28271394bd912", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fc4be1644e03",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-8fc4be1644e03", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af888e7055e42",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-af888e7055e42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c7d55fa8ad4c3",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-c7d55fa8ad4c3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-08f41821b952e",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-08f41821b952e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c5025bb8d7ae",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-7c5025bb8d7ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dcb1cd4dd7667",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-dcb1cd4dd7667", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b79e822797f6",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-7b79e822797f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2208d99381be",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-b2208d99381be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8be27312a8eb2",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-8be27312a8eb2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d18eb1cdbd62b",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-d18eb1cdbd62b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-4623cdfcf5337",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-4623cdfcf5337", comp.default)
        next()
      })
    }
  },
  {
    name: "v-daf23557ebc19",
    path: "/zh/javascript/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\README.md").then(comp => {
        Vue.component("v-daf23557ebc19", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/index.html",
    redirect: "/zh/javascript/"
  },
  {
    name: "v-6a4be63d7f3f2",
    path: "/zh/javascript/types.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\types.md").then(comp => {
        Vue.component("v-6a4be63d7f3f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-506f8a80de708",
    path: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\原型链.md").then(comp => {
        Vue.component("v-506f8a80de708", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/原型链.html",
    redirect: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html"
  },
  {
    name: "v-6a6d7efef2d63",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-6a6d7efef2d63", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-cbe3466803d67",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-cbe3466803d67", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5a2de7f903976",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-5a2de7f903976", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-2f874b4679829",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-2f874b4679829", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-b2ad86d785d4c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-b2ad86d785d4c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-257a8d4186a5a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-257a8d4186a5a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-cd788b45c483d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-cd788b45c483d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-2eaf06f6bea45",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-2eaf06f6bea45", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0591513f38eb4",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-0591513f38eb4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-07e187a5a6b07",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-07e187a5a6b07", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec74125503a16",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-ec74125503a16", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-f8dad42900cbc",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-f8dad42900cbc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-abf9fc4c6d35a",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-abf9fc4c6d35a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-4ed1d94086a56",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-4ed1d94086a56", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-3b22350db0881",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-3b22350db0881", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b4bd39f9eb6c",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-9b4bd39f9eb6c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-601b07fdc662f",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-601b07fdc662f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-6e1a3547afd4",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-6e1a3547afd4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-6693357f93adc",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-6693357f93adc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cfca88404c193",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-cfca88404c193", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8a32d982cbfd",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-f8a32d982cbfd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2aecc40543717",
    path: "/zh/standard/SPA.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\SPA.md").then(comp => {
        Vue.component("v-2aecc40543717", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28da7b59d111",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-28da7b59d111", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86c54c654172e",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-86c54c654172e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3cca1c3b6a59c",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-3cca1c3b6a59c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f3af078422b76",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-f3af078422b76", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea7d0046102d",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-ea7d0046102d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-186d1c4165eed",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-186d1c4165eed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7fa3b52794d5",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-d7fa3b52794d5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-189b0cb1e6208",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-189b0cb1e6208", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-e3a0934bca5f8",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-e3a0934bca5f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-8600a38a06301",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-8600a38a06301", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-fdc285397a043",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-fdc285397a043", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c279b57b5c2e2",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-c279b57b5c2e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6798b7b96f40b",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-6798b7b96f40b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cdf23a53c0436",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-cdf23a53c0436", comp.default)
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