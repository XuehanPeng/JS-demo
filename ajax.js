const ajax =(option)=>{
    // 0.创建时间戳
    let str=obj2Str(option.data ||{})
    //1.创建异步对象
let  xmlHttp;
let timer;
if(window.XMLHttpRequest){
    xmlHttp=new XMLHttpRequest()
}else{
    //针对低版本的IE浏览器兼容
    xmlHttp=new ActiveXObject('Microsoft XMLHTTP')
}

// 2.设置请求的方法和地址
if(option.type.toLowerCase()==='get'){
    xmlHttp.open(option.type, option.url +'?t=' +str,true)
    // 3.发送请求
    xmlHttp.send()
}else{
    xmlHttp.open(option.type, option.url,true)
    xmlHttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xmlHttp.send
}
// 4.监听状态变化
xmlHttp.onreadystatechange=()=>{
    if(xmlHttp.readyState===4){
        clearInterval(timer)
        if((xmlHttp.status >= 200 &&xmlHttp.status <300)|| xmlHttp.status ===304){
            option.success(xmlHttp.responseText)
        }else{
            option.error(xmlHttp.responseText)
        }
    }
}
// 5.处理超时时间
if(option.timeout){
    timer=setInterval(()=>{
        xmlHttp.abort()
        clearInterval(timer)
    },option.timeout)
}

}