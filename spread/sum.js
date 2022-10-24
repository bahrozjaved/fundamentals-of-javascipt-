// Normal
function SumofTwoNumbers(a,b){
    return a+b;
}

// console.log(Sumone(2,5)  )

//array form values

//  function Sumone(a,b){
//      return a+b;
//  }
// myarray =[5,4,3] 
//  console.log(Sumone(...myarray))

// spread operator acccpets multiple parament in form of array or object or any other in this the 3 is ignored because the function accept two parameter 

// rest operator

function calculate(...args){
let sum = 0;
for (const nsum of args) {
    sum +=nsum; 
}
return sum;
}
module.exports = {SumofTwoNumbers,calculate};

// console.log(someTwo(1,2,3,4,5,6,7,8,9))

//in this example the function accepts the unlimited parameters and uses the rest operator to structure them into an array


