let name;
// console.log({ name })
/* 
Primitive Datatypes
"text" = string
12(integer)  12.23()duble/float  = number
undefined
true/false - boolean
null
NaN
*/
// console.log(typeof (true));
// console.log(typeof (null));

/* 
Non-primitive datatypes || collection || Reference datatype 

Array
object
 */

// let fruit1 = "apple"
// let fruit2 = "orange"
// let fruit3;
// // Array => group of similar dataypes
// // let <arr_name>= [Oth element,1st element,..]
// let fruits = [fruit1, fruit2, fruit3, 12, null, true]
// fruits = [1, 2, 3, 4]
// fruits[0] = "grape"
// console.log(fruits[0]);
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[2]);


// // 

// /* 
// let <object_name> = {
//     <property>:<value>
//     <key>:<value>,
//     <attribute>:<value>,
// }
// */
// let projector = {
//     color: "white",
//     dimension: "1* 2* 3"
// }

let person = {
    name: "John",
    height: "5",
    age: 20,
    // age: 30,
    // TODO:
    // Age: 30,
    1: "one",
    // 2: "two"
}

console.log("result=", person["age"]);
// person.name = "changed John"
// console.log(person.name)
// console.log(person[1])



let name1 = "john 1"
let name2 = name1
console.log({ name2 });
name2 = "john 2"

console.log({ name1 });
console.log({ name2 });
console.log({ name1 });


let arr = [1, 2, 3, 4]
let arr2 = arr
// let arr2 = arr(points to the position of arr variable instead of ``copying the value|data)
// arr2[0] = "zero";
console.log({ arr });
// console.log({arr2});

// TODO: find a way to copy the value of original array. 

// operators  + -  && || 


// let arr3 = [<sperad operator >arr]
// object destructuring ==> rest operator. 
let arr3 = [...arr]
// let arr3 = [].concat(arr)
// let arr3 = arr.split()
arr3[0] = "zero"
console.log({ arr3 });


let obj = {
    a: 1,
    b: 2
}

let obj2 = obj
let obj3 = { c: 3, ...obj, B: "twoooooo" }
// let obj3 = { c: 3, a: 1, b: 2, b: "twoooooo" }
obj3.a = "changed a "
console.log({ obj });
// console.log({obj2});
console.log({ obj3 });

/* 
/users => 
[
   {id:1,name,address:{street_name,}},
   {id:2,name,address:{street_name,}},
   {id:3,name,address:{street_name,}},
]

/users/1 => 
   {id:1,name,address:{street_name,}},
*/



/* 
    Operators 
        - arthema
        - and || or ||not


*/


// console.log(2**2);

// console.log(10 / 3);
// console.log(10 % 3);  => returns the remainder
// console.log(10 % 3); 


let a = 1;
a = a + 2;
a = a + 2;
a = a + 2;
a += 2;  //  (a = a  + 2)

/* 
    increment | Decremnt
    pre-increment ++<variable>
        => increments and return result instantly
    post-increment <variable>++
        => increments but donot return result instantly
        => we get the incremented value only when the varaible gets used later.

*/
// console.log("result =", a++);
// console.log("result =" - "asdf");
console.log("result =", a);
// console.log("result =", ++a);



//TODO
// add tex-string with Number \=> "" "hrllo" + 23
// subtract tex-string with Number \=> "" "ehll" - 23
// add string-numeric with Number => "10" + 10
// subtract string-numeric with Number => "10" - 10


 a = "hello"
let b = 23
// console.log(1 == 1)
console.log(a + b)
// console.log(1 == 1)
console.log(1 == true)

// TODO: r. falsy values 



























// perncil app