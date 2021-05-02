type Person1 = {
 
    id:string,
    name:string,
    city:string
}
class Employee{
    id:string;
    name:string;
    dept:string;
    city:string;

    //constructors
 
    constructor(id:string,name:string,dept:string,city:string)
    {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
 
    }
     //setters
     writeDept(){
         console.log(`${this.name} works in ${this.dept}`)
     }
    }
 
     let salesEmployee1 = new Employee("E808","Manya","sales","hyderabad")
 
   salesEmployee1.writeDept();


   let data2: (Person1 | Employee )[] =
   [{ id: "E205", name: "Bob Smith", city: "London" },
    { id: "E208", name: "Alice Jones", city: "Paris"},
    { id: "E277", name: "Dora Peters", city: "New York"},
    salesEmployee1];

    data2.forEach(item => {
   if (item instanceof Employee) {
       item.writeDept();
   } 
   else {
       console.log(`${item.id} ${item.name}, ${item.city}`);
   }
});

