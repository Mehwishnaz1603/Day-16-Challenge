var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 🚀 Day 16 Challenge: Start Coding! 🚀//
//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of
//two different sets of laptops. Use the spread operator to combine these arrays into a 
//single array sorted in ascending order, then log the result.
var price1 = [20000, 30000];
var price2 = [25000, 50000];
var combine = __spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return a - b; });
console.log(combine);
//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties 
//make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = { make: "Dell", model: "Windows 11 vestro 15 3520", year: "2023",
    describe: function () {
        console.log("The laptop is a ".concat(this.year, ", ").concat(this.make, ", ").concat(this.model, "."));
    } };
laptop.describe();
//Question 47: Advanced Array Destructuring: Given an array of objects representingdifferent
//laptops, each with properties make, model, and year, use array destructuring to assign the 
//first and second laptops to variables. Then, log these variables.
//laptops to variables. Then, log these variables.
var laptops = [{ makeby: "Hp", model: "12th Gen Intel Core i7	", year: "2022" },
    { makeby: "Dell", model: "Vostro 15 3520", year: "2023" },
    { makeby: "Lenovo", model: "IdeaPad1 Amd Ryzen5", year: "2022" }];
var laptop_1 = laptops[0], laptop_2 = laptops[1];
console.log(laptop_1);
console.log(laptop_2);
