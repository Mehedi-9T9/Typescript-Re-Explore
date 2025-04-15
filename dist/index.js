"use strict";
const tasting = (nam) => {
    return `Hello, ${nam}!`;
};
console.log(tasting(" I ❣️ TypeScript "));
//Data type Explore
//string
const fullName = "Mehedi Hasan";
//number 
const roll = 5;
//boolean 
const isActive = true;
//null 
const nullValue = null;
//array 
const fruits = ["apple", "banana", "orang"];
//tuple
const nameAge = ["Mithu", 25];
//Object-
const person = {
    firstName: "Rifat",
    lastName: 'Hosen',
    company: "2B Fashion"
};
//access Modifire
const user = {
    distric: "naogaon",
    name: "ABC"
};
//Function 
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(10, 10);
// methods
const banker = {
    name: "Mehedi",
    balance: 10,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const balance = banker.addBalance(10);
console.log(balance);
//map fuction 
const numbers = [2, 3, 4];
const newNumbers = numbers.map((num) => num * num);
console.log(newNumbers);
//spreat oparetor 
const classNine = ["Hapsha", "Sweety", "Merina"];
const science = ["Riva", "Shahara"];
const classNineList = [...classNine, ...science];
console.log(classNineList);
const address1 = {
    vill: "ParanPur",
    post: "Fetgram"
};
const address2 = {
    distric: "naogaon",
    division: "Rajshahi"
};
const address3 = {
    country: "Bangladesh",
    language: "bengali"
};
const totalInfo = Object.assign(Object.assign(Object.assign({}, address1), address2), address3);
console.log(totalInfo);
//Rest oparetor 
const greeting = (...friends) => {
    friends.forEach(friend => {
        console.log(`Hello ${friend}`);
    });
    return friends;
};
console.log(greeting("Mehedi", "Nasim"));
//destructuring
const users = {
    name: "Mehedi",
    age: 23,
    profesion: "student"
};
const { age, profesion } = users;
console.log(age, profesion);
const colors = ["red", "green", "blue"];
const [sobuj, ,] = colors;
console.log(sobuj);
