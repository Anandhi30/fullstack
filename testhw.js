function hello(a,b,c){
    c(a,b);
}
function test (a,b){
    console.log(a*b);
}
hello(10,3,test)