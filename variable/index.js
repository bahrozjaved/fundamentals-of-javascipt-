// Differenc ebetween the variable declaration of var let and const and its use cases

// var practice and its comments and use case

// const hello = () =>{
//     var i =1 
//     console.log (i)
// }
// hello()

// console.log(i)   // throughs an error because it is limited to its scope of declaration it is limited to the myno function

// we used var mostly in the code where we want to declare the variable only the scopelimited or we can say that we want to declare it locally inside the function not the globally for all function var is mutable and not declarable again with the same name

// let and its use case
// function func() 
// {
//     let x = 10; 
 
//     if(x === 10) 
//     {
//         let y = 40; 
//         let x =20
 
//         console.log("x :",x); //Output 10
//         console.log("y :",y); //Output 20
//     }
     
//     console.log("out x:", x); // Output 10
//     // console.log(y); // ’undefined'
// }
 
// // As shown in the example that the let keyword is declare and it also declare inside the if block but it should not be updated the previous value which the var does if we saw in the example that outside the block it return 10 and inside the block it return the 20 and outside the blocky is undefined due to itsstricted scope limited mutable 
 
// func();



// const practice


// function check(){
// const i = 5

// console.log(i)
// i = 7
// console.log(i)
// }
// check()


// THE  ABOVE BLOCK Of code gave us the type error assigned to const value because the const can never be change because it isimmutable and it also limited to scope 
