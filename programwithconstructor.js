var Student1 = /** @class */ (function () {
    //defining constructor   
    function Student1(id, name) {
        this.id = id;
        this.name = name;
    }
    //creating method or function   
    Student1.prototype.display = function () {
        console.log("Function displays Student ID is: " + this.id);
        console.log("Function displays Student ID is: " + this.name);
    };
    return Student1;
}());
//Creating an object or instance     
var obj1 = new Student1(10, "Dhoni");
//access the field   
console.log("Reading attribute value of Student as: " + obj1.id);
console.log("Reading attribute value of Student as: " + obj1.name);
//access the method or function  
obj1.display();
