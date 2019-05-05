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
    name: "v-31076408625aa",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\README.md").then(comp => {
        Vue.component("v-31076408625aa", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-321d3a661414f",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-321d3a661414f", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-284a34ac48139",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-284a34ac48139", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-25aa7c9dea748",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-25aa7c9dea748", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-0a933e699b5ac",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-0a933e699b5ac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f2a435d78c9f",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-9f2a435d78c9f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-927f48076f333",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-927f48076f333", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9e36bb4a35e9",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-f9e36bb4a35e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bd3be97639ca3",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-bd3be97639ca3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2912fe39a6807",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-2912fe39a6807", comp.default)
        next()
      })
    }
  },
  {
    name: "v-36ffd3b158b44",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-36ffd3b158b44", comp.default)
        next()
      })
    }
  },
  {
    name: "v-75401448a290b",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-75401448a290b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8cb52ba299a5a",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-8cb52ba299a5a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-3b976fc8fb49c",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-3b976fc8fb49c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13a78ec62f7e4",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-13a78ec62f7e4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f816ed3b4f2d",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-8f816ed3b4f2d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc53c9899862d",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-bc53c9899862d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-2b7a40077f1ae",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-2b7a40077f1ae", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-9d9b2edf621c8",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-9d9b2edf621c8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-093ffd4d1250d",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-093ffd4d1250d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-594247e12ed63",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-594247e12ed63", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce9f9f00248c1",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-ce9f9f00248c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af2f428dc683a",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-af2f428dc683a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e905a3afda276",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-e905a3afda276", comp.default)
        next()
      })
    }
  },
  {
    name: "v-82a2b98a957e6",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-82a2b98a957e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2f8e36f0005",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-e2f8e36f0005", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51d0221e1431a",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-51d0221e1431a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-58c8fbad4f3b3",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-58c8fbad4f3b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ad94234d6e6b",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-9ad94234d6e6b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-37cc841ff5ac7",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-37cc841ff5ac7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7572166eb278e",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-7572166eb278e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f762627ce965",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-f762627ce965", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3915a85a41893",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-3915a85a41893", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d6d0319c0b29a",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-d6d0319c0b29a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-cafc575c6ab36",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-cafc575c6ab36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-42cac393d87f7",
    path: "/zh/javascript/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\README.md").then(comp => {
        Vue.component("v-42cac393d87f7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/index.html",
    redirect: "/zh/javascript/"
  },
  {
    name: "v-e7b84b247c261",
    path: "/zh/javascript/types.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\types.md").then(comp => {
        Vue.component("v-e7b84b247c261", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c6532641c3bbe",
    path: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\javascript\\原型链.md").then(comp => {
        Vue.component("v-c6532641c3bbe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/javascript/原型链.html",
    redirect: "/zh/javascript/%E5%8E%9F%E5%9E%8B%E9%93%BE.html"
  },
  {
    name: "v-d581b91c6a943",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-d581b91c6a943", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-500fce6415767",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-500fce6415767", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63958a31fc3f",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-63958a31fc3f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-8b5d38f6189a5",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-8b5d38f6189a5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-5b5e5651f83fb",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-5b5e5651f83fb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-0e065381d89d2",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-0e065381d89d2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-9d9f9bd8ed665",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-9d9f9bd8ed665", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-0e5480fcc9b3a",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-0e5480fcc9b3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a5902cabcad9",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-4a5902cabcad9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-48d99c1cabd8b",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-48d99c1cabd8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-703b96e9952b",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-703b96e9952b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-eab14c8819114",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-eab14c8819114", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-a2b9d198e8a2f",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-a2b9d198e8a2f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-3a0420ff3b37b",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-3a0420ff3b37b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-dca776839a6f5",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-dca776839a6f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0bd083269061e",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-0bd083269061e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-c2ad9d1723734",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-c2ad9d1723734", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-62478794c31ee",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-62478794c31ee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-d283879096aca",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-d283879096aca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ff1bb2dc3f9f3",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-ff1bb2dc3f9f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-afe84a390b079",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-afe84a390b079", comp.default)
        next()
      })
    }
  },
  {
    name: "v-da9f42673877d",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-da9f42673877d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8cf6fcc8263b6",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-8cf6fcc8263b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1059a8ca1e8d3",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-1059a8ca1e8d3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ab2a543361317",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-ab2a543361317", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2b233d6401e9b",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-2b233d6401e9b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-3d956d7d08a6f",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-3d956d7d08a6f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bd9f73b03537e",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-bd9f73b03537e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-227cc5c659353",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-227cc5c659353", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-3f776dbd4e6ef",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-3f776dbd4e6ef", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-0175b04512ba",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-0175b04512ba", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-f1370faa26745",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-f1370faa26745", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-a26c3e567e17",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-a26c3e567e17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fa7f3a4d3c72d",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-fa7f3a4d3c72d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9db63763fe2d7",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-9db63763fe2d7", comp.default)
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