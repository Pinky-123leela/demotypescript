var message = "hello world";
console.log(message);
function calculateTax(amount, discount) {
    if (discount === void 0) { discount = 0; }
    var extraFees = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraFees[_i - 2] = arguments[_i];
    }
    return (amount * 1.2) - discount +
        extraFees.reduce(function (total, val) { return total + val; }, 0);
}
var taxValue = calculateTax(1000, 0);
console.log("2 args :" + taxValue);
taxValue = calculateTax(10000, 10, 20, 40, 60, 90);
console.log("6 arg:" + taxValue);
function displayValue(str, val) {
    console.log(str + " value " + val);
}
displayValue("hello", 450);
