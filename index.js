
// 手写call
// let foo ={
//     value:1
// };
// function bar (){
//     console.log(this.value)
// }
// bar.call(foo)
// let foo ={
//     value:1,
//     bar :function(){
//         console.log(this.value)
//     }
// }
// foo.bar()
// 第一版
// Function.prototype.call2=function(context){
//     //首先要获取调用call 的函数，用this可以获取
//     context.fn=this;
//     context.fn()
//     delete context.fn;

// }
// bar.call2(foo)
// var foo ={
//     value:1
// }
// function bar (name,age){
//   console.log(name)
//   console.log(age)
//   console.log(this.value)
// }

// // 第二版
// Function.prototype.call2=function(context){
//     context.fn=this;
//     let arg=[...arguments].slice(1)
//     context.fn(...arg)
//     delete context.fn
// }
// bar.call2(foo,'pxh',12)

function bac (){
    console.log(arguments,'ddd')
}
bac()