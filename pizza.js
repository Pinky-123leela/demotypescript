var pizza = /** @class */ (function () {
    //constructor
    function pizza(id, pizzaName) {
        this.id = id;
        this.pizzaName = pizzaName;
    }
    //methods
    pizza.prototype.display = function () {
        console.log("Function displays pizza id is: " + this.id);
        console.log("Function displays pizza name is: " + this.pizzaName);
    };
    return pizza;
}());
//objects
var obj2 = new pizza(1, "chickenPizza");
//access fields
console.log("Reading attribute value of Student as: " + obj2.id);
console.log("Reading attribute value of Student as: " + obj2.pizzaName);
//access methods
obj2.display();
