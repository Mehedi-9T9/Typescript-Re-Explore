"use strict";
//type assertion
const jogFun = (num) => {
    return num + 5;
};
;
const user1 = {
    name: "Mehedi Hasan",
    age: 23,
    isAdmin: true,
    country: "bangladesh"
};
//Generic Type
const number = [1, 2, 3, 4];
const text = ['a', 'b', 'c'];
const boolean = [true, false];
const colors2 = ['red', 'green', 'blue'];
const students = [
    {
        name: "Mehedi Hasan",
        age: 24,
        roll: 2
    },
    {
        name: "Nahid Hasan",
        age: 13,
        roll: 4
    }
];
const player = [11, { name: "Neymar JR", age: 28 }];
//Generic Function
const createArray = (text, num) => {
    return [text, num];
};
createArray(22, 33);
//Generic Function Tuple
const createTupleArr = (val1, val2) => {
    return [val1, val2];
};
createTupleArr(12, "Mehedi");
//how to added a valiable in any user
const setCoures = (student) => {
    const course = "Developer";
    return Object.assign(Object.assign({}, student), { course });
};
console.log(setCoures({ name: "Mehedi", age: 23 }));
