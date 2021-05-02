class Person2  {
    
    constructor(public id:string,public name:string,public city:string){}
 
}
 
class Employee1 extends Person2{
    
   
   
    constructor(public readonly id:string,public name:string,private dept:string,public city:string)
    {
        super(id,name,city)
    }
 
     writeDept(){
         console.log(`${this.name} works in ${this.dept}`)
     }
    }

    class Customer extends Person2 {
        constructor(public readonly id: string, public name: string,
                public city: string, public creditLimit: number) {
            super(id, name, city);
        }
    }
    class Supplier extends Person2 {
        constructor(public readonly id: string, public name: string,
                public city: string, public companyName: string) {
            super(id, name, city);
        }
    }

 
     let salesEmployee2 = new Employee1("E808","Manya","sales","hyderabad")
 
   salesEmployee2.writeDept();
 
   let data4 =  [new Person2("234","Alex ","pune"),new Employee1("888","Meeta","Admin","Manipal")]
data.forEach(item => {
    console.log(`${item.name} ${item.city}`)

   if (item instanceof Employee1) {
       item.writeDept();
   }
})

let data6 = [new Employee1("e01", "kajal", "Sales", "Paris"),
        new Customer("c101", "Alice Jones", "London", 500)];
        
data.push(new Supplier("s101", "Dora Peters", "New York", "Acme"));
data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee1) {
        item.writeDept();
    } 
    else if (item instanceof Customer) {
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
    } 
    else if (item instanceof Supplier) {
        console.log(`Supplier ${item.name} works for ${item.companyName}`);
    }
});