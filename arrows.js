// const doubleIt=function(num){
//     return num*2;
// }//vareable ar moddy function diclar js old

const doubleIt= num=>num*2;//Es6 js shortcut single parametar adding.
const doubleIt2=(num,num2)=>num/num2;//double parametar.
const doubleIt3=()=>+5;//no parametar;
const multiline=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=x*y;
    return result;
}

console.log(multiline(33,45));