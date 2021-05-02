//Defining a Student class.  
var Student = /** @class */ (function () {
    function Student() {
    }
    //creating method or function   
    Student.prototype.display = function () {
        console.log("Student ID is: " + this.id);
        console.log("Student ID is: " + this.name);
    };
    return Student;
}());
//Creating an object or instance     
var obj = new Student();
obj.id = 101;
obj.name = "Virat Kohli";
obj.display();
