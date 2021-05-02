class pizza{
    //fields
    id:number;
    pizzaName:string;
//constructor
    constructor(id:number,pizzaName:string) {
       this.id= id;
       this.pizzaName = pizzaName;

    }
    //methods
    display():void {   
        console.log("Function displays pizza id is: "+this.id)   
        console.log("Function displays pizza name is: "+this.pizzaName)   
     }   
  } 
  //objects
  let obj2=new pizza(1,"chickenPizza")

  //access fields

  console.log("Reading attribute value of Student as: " +obj2.id,)  
console.log("Reading attribute value of Student as: " +obj2.pizzaName) 
//access methods
obj2.display()

    


