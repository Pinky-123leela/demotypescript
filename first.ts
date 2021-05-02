var message:string="hello world"
console.log(message)
 
function calculateTax(amount:number | null,discount:number=0,...extraFees:number[]):number
{
 
     return (amount*1.2) -discount +
     extraFees.reduce((total,val)=>total+val,0)
    
}
 
let taxValue = calculateTax(1000,0);
console.log(`2 args :${taxValue}`)
 
taxValue = calculateTax(10000,10,20,40,60,90)
console.log(`6 arg:${taxValue}`)
 
function displayValue(str:string,val:number):void{
 
    console.log(`${str} value ${val}`)
}
 
displayValue("hello",450)