var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    return Person2;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(id, name, dept, city) {
        var _this = _super.call(this, id, name, city) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.city = city;
        return _this;
    }
    Employee1.prototype.writeDept = function () {
        console.log(this.name + " works in " + this.dept);
    };
    return Employee1;
}(Person2));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name, city, creditLimit) {
        var _this = _super.call(this, id, name, city) || this;
        _this.id = id;
        _this.name = name;
        _this.city = city;
        _this.creditLimit = creditLimit;
        return _this;
    }
    return Customer;
}(Person2));
var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier(id, name, city, companyName) {
        var _this = _super.call(this, id, name, city) || this;
        _this.id = id;
        _this.name = name;
        _this.city = city;
        _this.companyName = companyName;
        return _this;
    }
    return Supplier;
}(Person2));
var salesEmployee2 = new Employee1("E808", "Manya", "sales", "hyderabad");
salesEmployee2.writeDept();
var data4 = [new Person2("234", "Alex ", "pune"), new Employee1("888", "Meeta", "Admin", "Manipal")];
data4.forEach(function (item) {
    console.log(item.name + " " + item.city);
    if (item instanceof Employee1) {
        item.writeDept();
    }
});
var data6 = [new Employee1("e01", "kajal", "Sales", "Paris"),
    new Customer("c101", "Alice Jones", "London", 500)];
data.push(new Supplier("s101", "Dora Peters", "New York", "Acme"));
data.forEach(function (item) {
    console.log("Person: " + item.name + ", " + item.city);
    if (item instanceof Employee1) {
        item.writeDept();
    }
    else if (item instanceof Customer) {
        console.log("Customer " + item.name + " has " + item.creditLimit + " limit");
    }
    else if (item instanceof Supplier) {
        console.log("Supplier " + item.name + " works for " + item.companyName);
    }
});
