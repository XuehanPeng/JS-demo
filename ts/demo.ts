// const arr: Array<string>=['22','44','yy'];
// console.log(arr)
// type Person <T>={
//     name:string;
//     age:number;
//     //可选属性
//     hobby?:T;
//     consoleHobby?:(hobby:T)=>void;
// }

// const p:Person<Array<string>>={
//     name:'pxh',
//     age:14,
//     hobby:['2','t','gg'],
//     consoleHobby(hobby){
//    hobby?.map(h=>{
//     h.slice
//    })
//     }
// }
// const a2:string[]=['2','3']
// //联合类型
// type IconSize='small'|'large'|'default'
// const size:IconSize='small'

// const iconSize=['small','large','default'] as const;
// // as const 是一个只读的操作
// type BaseIconSize=(typeof iconSize)[number];
// // const b:BaseIconSize='large'
// type IconSizePlus=BaseIconSize |number
// type BaseButton={}
// type PrimaryButton=BaseButton&{
//     type:'primary'
// }
// type DangerButton=BaseButton&{
//     type:'danger'
// }
// const button:BaseButton='danger'
// console.log(button,'eee')
// type Woman={
//     type:'woman';
//     huaZhuang:boolean
// }
// type Man={
//     type:'man';
//     hobby:string[]
// }
// type Human=Woman | Man;
// // as 是做类型断言的，我说他是什么类型就是什么类型
// let human:Human={} as Human;
// //这段代码无法执行 因为此时不知道human是男是女
// if(human.type==='woman'){}
// if(human.type==='man'){}
// //通常做类型断言这样做
// function isWoman(human:Human):human is Woman{
//     return human.type==='woman'
// }
// function isMan(human:Human):human is Man{
//     return human.type==='man'
// }
// const testIsWoman=isWoman(human)? true:false
// interface IData{
//     name:string;
// }
// // extends 约束泛型
// type ResponseDataType<T extends IData>={
//     code:number;
//     message:string;
//     success:boolean;
//     data:T;
// }
// const res:ResponseDataType<{color:string,name:string}>={
//     code:0,
//     message:'success',
//     success:true,
//     data:{
//   name:'233',
//   color:'yyy'
//     }
// }
// 只要你的项目相对比较复杂，对于类型的推导就会使用 infer
// infer一般配合extends来使用的
// infer 是用来做类型推导的
type Heyi=`Hello Heyi`;
type Xiaoming=`Hello Xiaoming`;
type Xiaofang=`Hello Xiaofang`;
//类型一旦被推导出来后，就可以生成新类型
// infer 就是，你在什么位置，要谁就推谁，退出来的这个类型随便取个名字
// 怎么理解呢？
// 我的 T 是不是被你的这个结构约束，如果是满足就把推断出来的类型给到，否则就不给（never）
// 三目运算符
type PickName<T>=T extends `${infer C}Hello,${infer Name}`
?`${Name}-${C}-haha`
:never;

type HeyiName= PickName<`1Hello Heyi`>;
type QueryFunction=(name:string, age:number)=> void;

type PickFunctionParam<T>= T extends(...args:infer P)=>void ? P:never;
type Params=PickFunctionParam<QueryFunction>