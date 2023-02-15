import { getLocaleDateFormat } from "@angular/common";

console.log(`typescript`);
let x=10;
/**
 * > tsc TS/TS.ts
 * > tsc TS/TS.ts -w
 * > tsc --init ---> to create .json config file
 */

let all :(string|number);
all=34;
all="name";

let myFriends = ["ali","ahmed",12];
// for(let i=0;i<myFriends.length;i++){
//     console.log(myFriends[i].repeat(3)); 
//     // Error
//     //Property 'repeat' does not exist on type 'string | number'.
// }

let myFriends2:string[] = ["ali","ahmed","12"];
for(let i=0;i<myFriends2.length;i++){
    console.log(myFriends2[i].repeat(3)); 
    // Error
    //Property 'repeat' does not exist on type 'string | number'.
}

// JS parameters is OPTIONAL
// use "?" after the parameter in TS to make it optional

function showUser(name:string,age:number,country:string){
    return `${name} - ${age} - ${country}`;
}
console.log(showUser("Moustafa",28, "Egypt"));
// console.log(showUser("Moustafa",28)); //Expected 3 arguments, but got 2
// console.log(showUser(undefined,28,"EG")); //Argument of type 'undefined' is not assignable to parameter of type 'string'.

function showUser2(name:string,age:number,country:string="und"){
    return `${name} - ${age} - ${country}`;
}
console.log(showUser2("Moustafa2",228)); //OK because of the default value of the missed parameter

function showUser3(name:string,age:number,country?:string){
    return `${name} - ${age} - ${country}`;
}
console.log(showUser2("Moustafa2",228)); //OK because of the missed parameter is optional by adding @the end of it ?

// function showUser4(name?:string,age:number,country?:string){
//     return `${name} - ${age} - ${country}`;
// }// Error -> A required parameter cannot follow an optional parameter.


/**
 * Rest Parameter
 */

function addAll(...nums:number[]){
    let result =0;
    nums.forEach((num)=> result+=num);
    return result;
}
console.log(addAll(10,20,30));
// console.log(addAll(10,20,30,true));//Argument of type 'boolean' is not assignable to parameter of type 'number'.
console.log(addAll(10,20,30,+true)); //+true is as one binary

function addAll2(...nums:number[]):number{
  let result=0;
  nums.forEach((num)=> result+=num);
  return result;
}
console.log(addAll2(1,2,3));

/**
 * Arrow fns and Anonymous fns
 */

const sayHiAsArrowFn = (name:string):string=>{
    return `Hi ${name}`;
};
console.log(sayHiAsArrowFn("Mous"));

const sayHiAsAnonymousFn = function(name:string):string{
  return `Hi ${name}`;
};
console.log(sayHiAsAnonymousFn("Mousta"));

/**
 * Datatype Alias
 */
type strANDnum = string | number;
let a :strANDnum = 100;
a="kali";

type Buttons = {
    up:string,
    down:string,
    right:string,
    left:string,
};
type last = Buttons&{
    x:boolean;
}
function getAction(btns:last){
   console.log(`Action for Button UP is ${btns.up}`);
   console.log(`Action for Button DOWN is ${btns.down}`);
   console.log(`Action for Button RIGHT is ${btns.right}`);
   console.log(`Action for Button LEFT is ${btns.left}`);
}
getAction({up:"Jump",down:"Go Down",right:"Go Right",left:"Go Left",x:true});

/**
 * Literal Types
 */
type nums = 0|1|-1;
function checkNum(num1:number,num2:number){
    if(num1===num2){
        return 0;
    }
    else if (num1>num2){
        return 1;
    }
    else{
        return -1;
    }
}
console.log(checkNum(3,4));
let y :nums;
y=0; //OK
y=1; //OK
y=-1; // OK
// y=4; //ERROR 

/**
 * Tuple
 */

// a typed array with a pre-defined length and types for each index
// Tuples are great because they allow each element in the array to be a known type of value
// define our tuple
let ourTuple:[number,string,boolean];
// initialize correctly
ourTuple=[1,"Moustafa",true];
// the order matters in our tuple
// ourTuple=[2,false,"ali"]; // ERROR

// you can push a new value to our tuple as any array
ourTuple.push(100);
console.log(ourTuple); //[ 1, 'Moustafa', true, 100 ]

// you can restrict the push by make it readonly
let ourTuple2:readonly[number,string,boolean];
ourTuple2=[3,"abdu",true];
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

function loginn(){
    while(true){
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

enum level{
  Kids,
  Easy,
  Medium,
  Hard
}



for (const l in level){
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

// - Interface .
// ...........
//    - Interface declaration
//           */

    interface User{
      id:string,
      phone:number,
      country:string
    }

// - Serve like types
 
   let user1:User={
     id:"1",
     phone:123,
     country:"EGY"

   };
// - Describe the shape of an object
 console.log(user1);    // { id: '1', phone: 123, country: 'EGY' }

 // Use interface with function
 function getData(user:User){
    console.log(`user id is ${user.id}`);
    console.log(`user phone is ${user.phone}`);
    console.log(`user country is ${user.country}`);
 }
getData({id:"2",phone:234,country:"syria"});
/**
 * user id is 2
   user phone is 234
   user country is syria
 */

   // Use readonly and optional operator

   interface EmployeeInterface{
      readonly id:number,
       name:string,
       salary?:number
   }

   let emp1:EmployeeInterface={
       id:2,
       name:"moustafa",
       salary:9000
   };

  // emp1.id=4;
  // Cannot assign to 'id' because it is a read-only property.

  let emp2:EmployeeInterface={
      id:3,
      name:"abdulla"
  };

  console.log(emp2);

   

