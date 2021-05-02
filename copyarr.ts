let arr1 = [1,2,3]
let arr2 = [4,5,6]
//spread operator
 
let copyarr = [...arr1,...arr2]
 
let copyarr2 = [...copyarr,7,8,9]
 
console.log(copyarr2)

//spreading objects
let obj1 = {name:"amit",age:23}
let obj2 = {address:"thane",mobileNumber:"3434343"}
 
let newObject = {...obj1,...obj2,salary:80000}
console.log(newObject)

//destructring
function add(r,b,c){
    return r+b+c;
}
 
var arr5= [3,6,9]
 
add(...arr5)