// challenge 1 string reverse

// let mystring = "bahrozjaved"

// function revString(str){
// return str.split('').reduce(function(rev,current){
//     console.log("cur",current)
//     console.log("rev",rev)
// return current+rev
// })
// }

// console.log(revString(mystring))

// CHALLENGE 2:
//  VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// Solution

//   function isPalindrome(str) {
//     const revString  = str.split('').reduce(function(rev,current){return current+rev})
//     return revString === str
//   }

//   console.log(isPalindrome("racecar"))
//   console.log(isPalindrome("won"))

//   // CHALLENGE 3:

//   REVERSE AN INTEGER
//   // Return an integer in reverse
//   // ex. reverseInt(521) === 125

// Solution

//    function reverseInt(int) {
//     const revint = int.toString().split('').reduce(function(rev,current){return current+rev})

//     return  parseInt(revint)*Math.sign(int)
//    }

// console.log(reverseInt(-312345))

//   // CHALLENGE 4:

//  CAPITALIZE LETTERS
//   // Return a string with the first letter of every word capitalized
//   // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// Solution

//   function capitalizeLetters(str) {
// let givenstr = str.toLowerCase().split(' ')
// for(let [index, value] of givenstr.entries()){
//     givenstr[index] =value.substring(0, 1).toUpperCase()+value.substring(1)
// }
// return givenstr.join(" ")
//   }
// console.log(capitalizeLetters("hello how are you"))

//   // CHALLENGE 5:

//      MAX CHARACTER from stirng and word
//   // Return the character that is most common in a string
//   // ex. maxCharacter('javascript') == 'a'

// Solution

//   function maxCharacter(str) {
//     if(str.split(' ').length >1){
//         let strARR = str.split(' ')
//         let charARR = []
//         for(let [index, value] of strARR.entries()){
//         charARR.push(value.split(''))
//             // console.log(index)
//             // console.log(value)

//         }

//   let result= charARR.flat().reduce((map, char) => {
//               map[char] = (map[char] || 0) + 1;
//               return map;
//          }, {});
//          return Math.max(...(Object.values(result)))
// }

//     else{
//         let strARR = str.split('')

//      let result=strARR.reduce((map, char) => {
//             map[char] = (map[char] || 0) + 1;
//             return map;
//        }, {});
//        return  Math.max(...(Object.values(result)))

//     }
// }
//   console.log(maxCharacter("hello world"))

//   // CHALLENGE 6: FIZZBUZZ

//   // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// Solution

// function fizzBuzz(a,b) {

//     for( let i =a;i<=b; i++){
//         let word =
//         i%5 ===0 && i%3 === 0
//           ? 'fizzBuzz'
//           : i%3  === 0
//           ? 'fizz'
//           : i%5  === 0
//           ? 'Buzz'
//           : i;
//        console.log(word)
//     }

//   }
//   fizzBuzz(1,100)
