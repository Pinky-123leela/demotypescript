//Function with string type parameter  
function add(a:string, b:string): string;  
//Function with number type parameter  
function add(a:number, b:number): number;  
//Function Definition
//any is use to assaign any value to variable  
function add(a: any, b:any): any {  
    return a + b;  
}  
//Result  
console.log("Addition: " +add("Hello ", "JavaTpoint"));   
console.log("Addition: "+add(30, 20));  