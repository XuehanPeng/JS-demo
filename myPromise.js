// 规范
// 0.初始状态pending
// 1.执行了 reslove Promise状态会变成fulfilled
// 2.reject => rejected
// 3.状态不可逆红
// 4.Promise 中有 throw=>rejected
// 1. 执行了resolve，Promise状态会变成fulfilled；
// 2. 执行了reject，Promise状态会变成rejected；
// 3. Promise状态不可逆，第一次成功就永久为fulfilled，第一次失败就永远状态为rejected；
// 4. Promise中有throw的话，就相当于执行了reject；
class myPromise {
    constructor(executor){
        //初始化值
        this.initValue() 
        this.initBind()
        executor(this.resolve,this.reject)
    }
    initValue(){
        this.PromiseState='pending'
        this.PromiseResult=null
    }
    initBind(){
        this.resolve=this.resolve.bind(this)
        this.reject=this.reject.bind(this)
    }
    resolve(value){
        // state是不可变的
        if(this.PromiseState !== 'pending') return
        //终值为传进来的值
        this.PromiseResult=value
        //如果执行resolve，状态变味fulfilled
        this.PromiseState='fulfilled'
    }
    reject(reason){
        if(this.PromiseState !=='pending') return
        //终值为传进来的值
        this.PromiseResult=reason
        //如果执行reject，状态变味rejected
        this.PromiseState='rejected'
    }
}