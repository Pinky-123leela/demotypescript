var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//spread operator
var copyarr = __spreadArray(__spreadArray([], arr1), arr2);
var copyarr2 = __spreadArray(__spreadArray([], copyarr), [7, 8, 9]);
console.log(copyarr2);
var obj1 = { name: "amit", age: 23 };
var obj2 = { address: "thane", mobileNumber: "3434343" };
var newObject = __assign(__assign(__assign({}, obj1), obj2), { salary: 80000 });
console.log(newObject);
