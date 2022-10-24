// let arr =[1,2,3,"ali",4,5,6,"ahmed",7,8,"helllo","bahroz"]

// const new_array = arr.filter(item =>isNaN(item) );
// console.log(new_array)
// const arrayList = arr.map(item =>{
//     // console.log("iter",item)
//     if(typeof (item) === "number" && item != isNaN(item)  ){
//         return item
//     }
// });
// console.log((arrayList))

// const arrayList = arr.map(item =>{
//     // console.log("iter",item)
//     if(typeof (item) === "number" && item != isNaN(item)  ){
//         return item
//     }
// });

// const arrayList = arr.filter(item =>{
//     // console.log("iter",item)
//     if(typeof (item) === "number" && item != isNaN(item)  ){
//         return item
//     }
// });
// console.log(arrayList)

// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function(obj, pet,i){

//     if (!obj[pet]) {
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});

// console.log(petCounts);

// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function(total,currentpet){
//     // console.log(total)
//     // console.log(currentpet)
//     console.log(!total[currentpet])
//     console.log(currentpet)
//     console.log(total)

//     if (!total[currentpet]) {
//         total[currentpet] = 1;
//     } else {
//         total[currentpet]++;
//     }
//     return total;
// },{});

// console.log(petCounts)

// var numbers = [100, 200, 300, 400, 100, 300, 500,400,200,200];

// var newarray = numbers.reduce(function (prev,current)
// {   console.log( current)
//     console.log(prev)
//     console.log(prev[current])
//     console.log(!prev[current])
//    if(!prev[current]){
//         prev[current] = 1
//     }
//     else{
//         prev[current] += 1
//     }
//     return prev
// },{})

// // console.log(newarray)

// var data = [
//     {
//         id:1,
//         "name": "bahroz",
//         "degree":"BS",
//     },
//     {
//         id:2,
//         "name": "ahmed",
//         "degree":"BS",
//     },    {
//         id:3,
//         "name": "amjad",
//         "degree":"MS",
//     },    {
//         id:4,
//         "name": "usman",
//         "degree":"BS",
//     },    {
//         id:5,
//         "name": "hamza",
//         "degree":"MS",
//     }
// ]



// var mydata = Object.keys(data).reduce(function(prev,current){
//     if(data[current].degree === "MS"){
//         prev.push(data[current])
//     }
//     return prev
// },[])

// console.log(mydata)




// const arr = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
// const myarr  = arr.splice(3,2)
// console.log(arr)


// const arr = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
// // const arr = [1,2,3,4,5,6]
// const myarr =arr.splice(0, 4);
// console.log(myarr)

// const arr = [[1],[2],[3],[4],[5]]
// const myarr = arr.flat(1)
// console.log(myarr)


const scores = [{
    id: 1,
    score: "100%"
},
{
    id: 2,
    score: "90%"
},
{
    id: 3,
    score: "80%"
},
];

const titles = [{
    id: 2,
    title: "hello"
},
{
    id: 3,
    title: "GDSC"
},
{
    id: 1,
    title: "world"
}
];

const var3 = titles.map((title)=>{
    title.score =scores.find(newscore =>newscore.id === title.id ).score
    return title 
})
console.log(var3)


const var1 = scores.map((score)=>{
    score.title = titles.find(title => title.id === score.id).title
    return score
})

console.log(var1)
