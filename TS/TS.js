"use strict";
exports.__esModule = true;
console.log("typescript");
var x = 10;
/**
 * > tsc TS/TS.ts
 * > tsc TS/TS.ts -w
 * > tsc --init ---> to create .json config file
 */
var all;
all = 34;
all = "name";
var myFriends = ["ali", "ahmed", 12];
// for(let i=0;i<myFriends.length;i++){
//     console.log(myFriends[i].repeat(3)); 
//     // Error
//     //Property 'repeat' does not exist on type 'string | number'.
// }
var myFriends2 = ["ali", "ahmed", "12"];
for (var i = 0; i < myFriends2.length; i++) {
    console.log(myFriends2[i].repeat(3));
    // Error
    //Property 'repeat' does not exist on type 'string | number'.
}
// JS parameters is OPTIONAL
// use "?" after the parameter in TS to make it optional
function showUser(name, age, country) {
    return "".concat(name, " - ").concat(age, " - ").concat(country);
}
console.log(showUser("Moustafa", 28, "Egypt"));
// console.log(showUser("Moustafa",28)); //Expected 3 arguments, but got 2
// console.log(showUser(undefined,28,"EG")); //Argument of type 'undefined' is not assignable to parameter of type 'string'.
function showUser2(name, age, country) {
    if (country === void 0) { country = "und"; }
    return "".concat(name, " - ").concat(age, " - ").concat(country);
}
console.log(showUser2("Moustafa2", 228)); //OK because of the default value of the missed parameter
function showUser3(name, age, country) {
    return "".concat(name, " - ").concat(age, " - ").concat(country);
}
console.log(showUser2("Moustafa2", 228)); //OK because of the missed parameter is optional by adding @the end of it ?
// function showUser4(name?:string,age:number,country?:string){
//     return `${name} - ${age} - ${country}`;
// }// Error -> A required parameter cannot follow an optional parameter.
/**
 * Rest Parameter
 */
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    nums.forEach(function (num) { return result += num; });
    return result;
}
console.log(addAll(10, 20, 30));
// console.log(addAll(10,20,30,true));//Argument of type 'boolean' is not assignable to parameter of type 'number'.
console.log(addAll(10, 20, 30, +true)); //+true is as one binary
function addAll2() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    nums.forEach(function (num) { return result += num; });
    return result;
}
console.log(addAll2(1, 2, 3));
/**
 * Arrow fns and Anonymous fns
 */
var sayHiAsArrowFn = function (name) {
    return "Hi ".concat(name);
};
console.log(sayHiAsArrowFn("Mous"));
var sayHiAsAnonymousFn = function (name) {
    return "Hi ".concat(name);
};
console.log(sayHiAsAnonymousFn("Mousta"));
var a = 100;
a = "kali";
function getAction(btns) {
    console.log("Action for Button UP is ".concat(btns.up));
    console.log("Action for Button DOWN is ".concat(btns.down));
    console.log("Action for Button RIGHT is ".concat(btns.right));
    console.log("Action for Button LEFT is ".concat(btns.left));
}
getAction({ up: "Jump", down: "Go Down", right: "Go Right", left: "Go Left", x: true });
function checkNum(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(checkNum(3, 4));
var y;
y = 0; //OK
y = 1; //OK
y = -1; // OK
// y=4; //ERROR 
/**
 * Tuple
 */
// a typed array with a pre-defined length and types for each index
// Tuples are great because they allow each element in the array to be a known type of value
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [1, "Moustafa", true];
// the order matters in our tuple
// ourTuple=[2,false,"ali"]; // ERROR
// you can push a new value to our tuple as any array
ourTuple.push(100);
console.log(ourTuple); //[ 1, 'Moustafa', true, 100 ]
// you can restrict the push by make it readonly
var ourTuple2;
ourTuple2 = [3, "abdu", true];
// ourTuple2.push(100); //Property 'push' does not exist on type 'readonly
/**
 * Void and Never
 */
// void
// - fn that returns nothing
// - fn in JS that not return a value will show "undefined"
// - undefined != void
// never
// - fn doesn't have a normal completion
// - it throws an error || infinity loop
function loginn() {
    while (true) {
        console.log("Moustafa");
    }
}
// loginn();
// console.log("hi ");
/**
 * enum
 */
// an enum is a special class that represents a group of constants
//[1] Numeric Enums
// - by default -> enums will initialize the first value to 0
// and add 1 to each additional value.
var level;
(function (level) {
    level[level["Kids"] = 0] = "Kids";
    level[level["Easy"] = 1] = "Easy";
    level[level["Medium"] = 2] = "Medium";
    level[level["Hard"] = 3] = "Hard";
})(level || (level = {}));
for (var l in level) {
    console.log(l);
    /**
     *  0
        1
        2
        3
        Kids
        Easy
        Medium
        Hard
     */
    console.log("####");
    console.log(level);
}
// - Serve like types
var user1 = {
    id: "1",
    phone: 123,
    country: "EGY"
};
// - Describe the shape of an object
console.log(user1); // { id: '1', phone: 123, country: 'EGY' }
// Use interface with function
function getData(user) {
    console.log("user id is ".concat(user.id));
    console.log("user phone is ".concat(user.phone));
    console.log("user country is ".concat(user.country));
}
getData({ id: "2", phone: 234, country: "syria" });
var emp1 = {
    id: 2,
    name: "moustafa",
    salary: 9000
};
// emp1.id=4;
// Cannot assign to 'id' because it is a read-only property.
var emp2 = {
    id: 3,
    name: "abdulla"
};
console.log(emp2);
