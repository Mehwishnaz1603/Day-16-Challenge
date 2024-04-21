             // 🚀 Day 16 Challenge: Start Coding! 🚀//
//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of
//two different sets of laptops. Use the spread operator to combine these arrays into a 
//single array sorted in ascending order, then log the result.
let price1 = [20000, 30000]
let price2 = [25000, 50000]
let combine = [...price1, ...price2].sort((a, b) => a - b)
console.log(combine);

//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties 
//make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = { make: "Dell", model: "Windows 11 vestro 15 3520", year: "2023",
describe:function() {
console.log(`The laptop is a ${this.year}, ${this.make}, ${this.model}.`);}}
laptop.describe()

//Question 47: Advanced Array Destructuring: Given an array of objects representingdifferent
//laptops, each with properties make, model, and year, use array destructuring to assign the 
//first and second laptops to variables. Then, log these variables.
//laptops to variables. Then, log these variables.
let laptops = [ {makeby: "Hp", model: "12th Gen Intel Core i7	", year: "2022"},
                {makeby: "Dell", model: "Vostro 15 3520", year: "2023"},
                {makeby: "Lenovo", model: "IdeaPad1 Amd Ryzen5", year: "2022"} ]
let [laptop_1, laptop_2] = laptops
console.log(laptop_1); 
console.log(laptop_2);
               