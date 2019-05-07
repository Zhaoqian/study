---
sidebar: auto
sidebarDepth: 2
---

# 单页面应用开发

## MPA与SPA简介
::: tip MPA
MPA (Multi-page Application) 多页面应用指的就是最传统的 HTML 网页设计，早期的网站都是这样的设计，所之称为「网页设计」。使用 MPA 在使用者浏览 Web 时会依据点击需求切换页面，浏览器会不停的重载页面 (Reload)，整个操作也常感觉卡卡。如果使用这样的设计在 Web App 中，使用者体验比较差，整体流畅度扣分。但进入门槛低，简单套个 jQuery 就可以完成。  
:::

::: tip SPA
SPA (Single-page Application) 顾名思义在 Web 设计上使用单一页面，利用 JavaScript 操作 Dom 的技术实现各种应用，现今在介面上算是非常受欢迎的设计，搭配 AJAX 使得整体页面反应速度相当迅速，配合上路由懒加载等手段可以达到Native应用的体验。 
:::

## 图解
![多页面](/study/spa/mpa.png)
![单页面](/study/spa/spa.png)

## 对比
![对比](/study/spa/diff.png)

<!-- ## 实现流程
```flow
st=>start: 路由原生实现
changeUrl=>operation: 改变地址栏
changeContent=>operation: 改变内容

hashMode=>operation: hash模式
historyMode=>operation: history模式

hashPushHistory=>operation: push方式
codePushHistory=>operation: 对hash进行赋值
hashReplaceHistory=>operation: replace方式
codeReplaceHistory=>operation: window.location.replace


hisPushHistory=>operation: push方式
hisCodePushHistory=>operation: window.location.pushState
hisPeplaceHistory=>operation: replace方式
hisCodeReplaceHistory=>operation: window.location.replaceState


modeCondition=>condition: hash or history?
changeCondition=>condition: push or replace?
changeCondition2=>condition: push or replace?

e=>end:结束

st->changeUrl->modeCondition
modeCondition(yes)->hashMode
modeCondition(no)->historyMode

hashMode->changeCondition
changeCondition(yes)->hashPushHistory->codePushHistory
changeCondition(no)->hashReplaceHistory->codeReplaceHistory

historyMode->changeCondition2
changeCondition2(yes)->hisPushHistory->hisCodePushHistory
changeCondition2(no)->hisPeplaceHistory->hisCodeReplaceHistory
``` -->


## 实现流程
![流程](http://assets.processon.com/chart_image/5cc6ac6be4b08b66b9c0080a.png)

## 代码实现
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>原生实现hash和browser两种路由模式</title>
</head>
<body>
    <div class="router_box">
        <a href="/home" class="router" replace="true">主页</a>
        <a href="/news" class="router">新闻</a>
        <a href="/team" class="router">团队</a>
        <a href="/about100" class="router">关于</a>
    </div>
    <div id="router-view"></div>

    <script>
         function Router(params){
            // 记录routes配置
            this.routes  = params.routes||[];
            // 记录路由模式
            this.mode = params.mode||'hash';
            //初始化
            this.init = function(){
                var that = this;
                //绑定路由响应事件
                document.querySelectorAll('.router').forEach((item,index)=>{
                  //a标签的点击事件
                  item.addEventListener('click',function(e){
                       //阻止a标签的默认行为
                   if(e&&e.preventDefault){
                        e.preventDefault()
                   }else{
                       window.e.returnValue = false
                   }
                //    判断是hash路由还是history路由
                   if(that.mode=='hash'){
                       if(this.getAttribute('replace')){
                            var i = window.location.href.indexOf('#');
                            // 通过replace方法直接替换url
                            window.location.replace(window.location.href.slice(0,i>0?i:0+'#'+this.getAttribute(href)))
                       }else{
                           window.location.hash= this.getAttribute('href')
                       }
                   }else{
                       //判断是push方法，还是replace方法
                       if(this.getAttribute('replace')){
                            window.history.replaceState({},'',window.location.origin+this.getAttribute('href'))
                       }else{
                        window.history.pushState({},'',window.location.origin+this.getAttribute('href'))
                       }
                   }
                   that.routerChange()
                  },false)

                //   路由变化后，更新内容
                if(this.mode=='hash'){
                    window.addEventListener('hashchange',()=>{
                        this.routerChange()
                    })
                }else{
                    window.addEventListener('propstate',()=>{
                        this.routerChange()
                    })
                }
                this.routerChange()
                })
            },
            this.routerChange=function(){
                if(this.mode=='hash'){
                    let nowHash = window.location.hash;
                    let index = this.routes.findIndex((item,index)=>{
                        return nowHash==('#'+item.path)
                    })
                   if(index>=0){
                       document.getElementById('router-view').innerHTML=this.routes[index].component
                   }else{
                    //    如果没有找到相应的路由，则去找有没有*
                    let defaultRoute = this.routes.findIndex(item=>{
                        return item.path == '*'
                    })
                    // 找到*执行重定向
                    if(defaultRoute>=0){
                        var i = window.location.href.indexOf('#');
                        // 用replace直接替换路由
                        // window.location.replace(
                        //         window.location.href.slice(0, i >= 0 ? i : 0) + '#' + this.routes[defaultIndex].redirect
                        //     )
                        window.location.hash= this.routes[defaultRoute].redirect
                            
                    }
                   }
                   
                }else{
                   let path = window.location.href.replace(window.location.origin,'')
                  
                   let index = this.routes.findIndex(item=>{
                       return path==item.path
                   })
                   if(index>=0){
                    document.getElementById('router-view').innerHTML=this.routes[index].component
                   }else{
                    let defaultRoute = this.routes.findIndex(item=>{
                        return item.path == '*'
                    })
                  
                    // 找到*执行重定向
                    if(defaultRoute>=0){
                        
                        // 用replaceState直接替换路由
                        // window.history.replaceState({},'',window.location.origin + this.routes[defaultRoute].redirect)                    
                        window.history.pushState({},'',window.location.origin+this.routes[defaultRoute].redirect)
                            this.routerChange()
                    }
                   }
                }
            }
            this.init()
        }
         new Router({
            mode: 'hash',
            routes:[
                { path: '/home', component: '<h1>主页</h1><h4>新一代前端工程师：我们啥都会</h4>' },
                { path: '/news', component: '<h1>新闻</h1><h4>今天2018-11-5，上课还得穿工装</h4>' },
                { path: '/team', component: '<h1>团队</h1><h4>WEB前端工程师</h4>' },
                { path: '/about', component: '<h1>关于</h1><h4>一面而高薪就业</h4>' },
                { path:'*', redirect:'/home'}
            ]
        });

    </script>
</body>
</html>
```

## 兼容问题

ie9及以下不支持html5 history新特性，可引入[history库](https://github.com/devote/HTML5-History-API)