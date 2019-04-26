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
    name: "v-06ea6822ea633",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\README.md").then(comp => {
        Vue.component("v-06ea6822ea633", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-2410be3e25e37",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-2410be3e25e37", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-d435b8b422ffa",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d435b8b422ffa", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-bb77b622fea15",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-bb77b622fea15", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-52ed5830022b9",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-52ed5830022b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79812f2f66598",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-79812f2f66598", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a7d1e940e27f",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-6a7d1e940e27f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60f842af58c72",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-60f842af58c72", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ff24dbf01ebf1",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-ff24dbf01ebf1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-94662ff1af20d",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-94662ff1af20d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-99ccc6014ff57",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-99ccc6014ff57", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ec2b29c31376",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-4ec2b29c31376", comp.default)
        next()
      })
    }
  },
  {
    name: "v-91e54856b754b",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-91e54856b754b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-2f85806b616c1",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-2f85806b616c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6759058c5588a",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-6759058c5588a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-efad2a8a64d0e",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-efad2a8a64d0e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7070d0645906e",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-7070d0645906e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-15badcd3ae72",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-15badcd3ae72", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-d4043e9cc482b",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d4043e9cc482b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-28a5aae39d10e",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-28a5aae39d10e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-b522b6be2b3e5",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-b522b6be2b3e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc03ac655ccce",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-bc03ac655ccce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-006ae212c519d",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-006ae212c519d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d89f629c53c6",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-2d89f629c53c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-58bcf8a25dda4",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-58bcf8a25dda4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc886d275073e",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-bc886d275073e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-196835a390cad",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-196835a390cad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4d2f28230b3bc",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-4d2f28230b3bc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ed17ed7ac2a8d",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-ed17ed7ac2a8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0bc022d681909",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-0bc022d681909", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4bbd144f9a25b",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-4bbd144f9a25b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-716d0f5d9fa63",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-716d0f5d9fa63", comp.default)
        next()
      })
    }
  },
  {
    name: "v-53b75f60ade95",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-53b75f60ade95", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef8d6e0db473b",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-ef8d6e0db473b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-67642419ba7cf",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-67642419ba7cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-54f6fe38cc474",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-54f6fe38cc474", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-8e1ad332131e9",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-8e1ad332131e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4fb71fccc9b0e",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-4fb71fccc9b0e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-29642e7a96d7a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-29642e7a96d7a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-3a220aceaefa8",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-3a220aceaefa8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-2a0261b8134d3",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-2a0261b8134d3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-1a64e9cf471ba",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-1a64e9cf471ba", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-41e804db62d37",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-41e804db62d37", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de608f8649d08",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-de608f8649d08", comp.default)
        next()
      })
    }
  },
  {
    name: "v-075f5db1689b8",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-075f5db1689b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b5b41260492b",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-7b5b41260492b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-246ff8987d0f8",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-246ff8987d0f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-bda99dd904e98",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-bda99dd904e98", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-340fc933d85bb",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-340fc933d85bb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-6f2b8fd897dd1",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-6f2b8fd897dd1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-02140e8bf33f4",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-02140e8bf33f4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-5ac9a270f75f",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-5ac9a270f75f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-f765493ddb2f1",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-f765493ddb2f1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-55abac6ecfed1",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-55abac6ecfed1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-545b5feb2a013",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-545b5feb2a013", comp.default)
        next()
      })
    }
  },
  {
    name: "v-29fd678bb2637",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-29fd678bb2637", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1809eb987ce2e",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-1809eb987ce2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a27bf8be4e44",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-7a27bf8be4e44", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2f9856100774",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-b2f9856100774", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21e98a5ce03c6",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-21e98a5ce03c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3ef883dfffcef",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-3ef883dfffcef", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-150c6429c28b6",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-150c6429c28b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d46b84144dde1",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-d46b84144dde1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-75e7976b5e15c",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-75e7976b5e15c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-56ba5a623b679",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-56ba5a623b679", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-2d4259a3aa234",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-2d4259a3aa234", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-36c8ab3f8b4f6",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-36c8ab3f8b4f6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-bd2cddac5d8d8",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-bd2cddac5d8d8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b87354a02905b",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-b87354a02905b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2dac5f067476",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\AAA_learning\\实训一\\博客\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-f2dac5f067476", comp.default)
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