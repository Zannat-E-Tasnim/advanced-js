//number
let age;    //false
if(age){
    console.log(age, " True");
}
else{
    console.log(age, " False");
}

age =  0;   //false
if(age){
    console.log(age, " True");
}
else{
    console.log(age, " False");
}

age =  20;   //true
if(age){
    console.log(age, " True");
}
else{
    console.log(age, " False");
}

age =  null;  //false
if(age){
    console.log(age, " True");
}
else{
    console.log(age, " False");
}

age =  NaN;  //false
if(age){
    console.log(age, " True");
}
else{
    console.log(age, " False");
}

//string
let name =  "Saima";   //true
if(name.length){
    console.log(name," True");
}
else{
    console.log(name," False");
}

name =  "";       //empty string ------ false
if(name.length){
    console.log(name," True");
}
else{
    console.log(name," False");
}

name =  " ";       // space --------- true
if(name.length){
    console.log(name," True");
}
else{
    console.log(name," False");
}