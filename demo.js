// commsnJs module

let example=()=>{

    console.log("helo from module");
}
let add=(a,b)=>{
    return a+b;
}
let sub=(a,b)=>{
    return a-b;
}
let mul=(a,b)=>{
    return a*b;
}
let div=(a,b)=>{
    return a/b;
}
module.exports={example,add,sub,mul,div};