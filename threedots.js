const Ages=[22,21,20,19,23,18];
const Ages2=[26,25,25,16,24,17];
const Ages3=[32,21,28,19,23,19];
//const AllAges=Ages.concat(Ages2).concat([5]).concat(Ages3);
const add=[...Ages, ...Ages2,7,...Ages3]//Es6
console.log(add);
const fast=333;
const meddle=666;
const last=222;
//const result=Math.max(fast,meddle,last);
const big=[555,666,777,888];
const result2=Math.max(...big)//Es6
console.log(result2);
