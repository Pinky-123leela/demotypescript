//Defining a Student class.  
class Student {   
    //defining fields    
    id: number;  
    name:string;  
  
    //creating method or function   
    display():void {   
        console.log("Student ID is: "+this.id)   
        console.log("Student ID is: "+this.name)   
    }   
}   
  
//Creating an object or instance     
let obj = new Student();  
obj.id = 101;  
obj.name = "Virat Kohli";  
obj.display();  