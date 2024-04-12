//1.undefined
let abc;
console.log(abc);

//2.undefined
function add(num1,num2){console.log(num1+num2)};  //return nothing
let result = add(12,13);
console.log(result);

//3.undefined
function add(num1,num2){console.log(num1,num2)};  //return nothing, also second parameter has not passes
result = add(12);
console.log(result);

//4.undefined
const person = {name:'vfv', age:20};
console.log(person.salary);   


// null ---- explicitly set when there is nothing