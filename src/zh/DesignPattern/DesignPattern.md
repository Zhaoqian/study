# 设计模式

#### 一，设计经验


1. 测略模式
     ```
     解决问题：判断特别多，但是判断条件特别简单
     ```
     

---

2. 观察者模式/发布订阅者模式
    ```
        class Wathc{
            constructor(props){
                this.events={}
            }
            on(type,listener){ //订阅者
             if(!Array.isArray(this.events[type])){
                 this.events[type]=[]  
                }else{
                    this.events[type].push(listener)   
                }
                
            }
            emit(type,...reset){  //发布者
                this.events.type.forEach(item=>{item(...reset)});
            }
        }
        
        const w = new Watch();
        w.on('ok',(msg)=>console.log(msg))
        w.emit('ok','数据')
    ```
    

---

3.中间价模式 
    
  ```
    const arr=[
            (next)=>{
                console.log(1)
                next()
            },
            (next)=>{
                console.log(2)
                next()
            },
            (next)=>{
                setTimeout(()=>{
                    console.log(3) 
                    next()
                    },3000)
            },
            ()=>{
                console.log(4)
              
            }
        ]
        function run(arr){
            let index=0;
            const next=()=>{
                index++;
                arr[index](next)
            }
            arr[0](next)
        }
        run(arr)
  ```

   
  

