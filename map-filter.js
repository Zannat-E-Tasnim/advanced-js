numbers = [12,14,15,17,20];

// numbers.map(function(element,index,array){
//     console.log(element,index,array);
// })

let result = numbers.map(function(element){      //returns an array 
    return element*element;
})
console.log("Square of elements : ",result);

//filter
result = numbers.filter(x=>x%2==0)
console.log("Even : ",result);

result = numbers.filter(x=>x%2!=0)
console.log("Odd : ",result);

result = numbers.filter(x=>x>15)
console.log("Greater than 15 : ",result);

//find
result = numbers.find(x=>x>15)
console.log("Greater than 15 using find: ",result);

