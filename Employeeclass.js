var Employee2 = /** @class */ (function () {
    //constructors
    function Employee2(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    //setters
    Employee2.prototype.writeDept = function () {
        console.log(this.name + " works in " + this.dept);
    };
    return Employee2;
}());
var salesEmployee = new Employee2("E808", "Manya", "sales", "hyderabad");
salesEmployee.writeDept();
var data1 = [{ id: "E205", name: "Bob Smith", city: "London" },
    { id: "E208", name: "Alice Jones", city: "Paris" },
    { id: "E277", name: "Dora Peters", city: "New York" },
    salesEmployee];
data1.forEach(function (item) {
    if (item instanceof Employee2) {
        item.writeDept();
    }
    else {
        console.log(item.id + " " + item.name + ", " + item.city);
    }
});
