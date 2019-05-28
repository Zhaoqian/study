# 构造函数

#### 一，new的过程
  1，声明一个空对象
  2，空对象的__proto__等于构造函数的prototype
  3，构造函数.call(空对象)
  
#### 二，实现一个异步操作
```
  function Person(name){
            if (this instanceof Person){
                // 声明一个空的队列
                this.queues=[];
                // 将默认的行为放在队列中
                this.queues.push({
                    delay:0,
                    cb:()=>console.log(`This is ${name}`)
                })
                // 异步调用run方法执行队列
                setTimeout(()=>{
                    this.run()
                })
            }else{
                // 无new实例化
                return new Person(name);
            }
        }
        // 执行队列
        Person.prototype.run=async function(){
            for(let i =0;i<this.queues.length;i++){
                let delay = this.queues[i].delay,
                    cb = this.queues[i].cb
                    if(delay){
                     
                      await this.toPromise(delay,cb)
                    }else{
                       await  cb()
                    }
            }
        }
        // //返回一个Promise,阻塞执行
        Person.prototype.toPromise= function(delay,cb){
            // 把一个有延迟的函数转为promise,延迟时间为状态改为resolve的时间
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    cb()
                    resolve()
                },delay)
            })
        }
        Person.prototype.sleep=function(delay){
            this.queues.push({
                delay,
                cb:()=>console.log(`sleep after ${delay}`)
            })
            return this
        }
        Person.prototype.eat=function(food){
            this.queues.push({
                delay:0,
                cb:()=>console.log(`eat ${food}`)
            })
            return this
        }
        Person.prototype.sleepFirst=function(delay){
            this.queues.unshift({
                delay,
                cb:()=>console.log(`sleep befor ${delay}`)
            })
            return this
        }
      Person('li').sleep(3000).eat('dener').sleepFirst('5000')

```
