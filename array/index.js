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




let ndarray = [
    {
        "id":1,
        "title":"javascript",
        "teacher":"Azeem",
    },
    {
        "id":2,
        "title":"javascript",
        "teacher":"Inam",
    },
    {
        "id":3,
        "title":"javascript",
        "teacher":"Usman",
    },
    {
        "id":4,
        "title":"javascript",
        "teacher":"sharoz",
    },
    {
        "id":5,
        "title":"javascript",
        "teacher":"javed",
    },
    {
        "id":6,
        "title":"javascript",
        "teacher":"bilal",
    }
]

let c_hours = [
    {
        "id":1,
        "credit": 4,
        "room":6
    },
    {
        "id":2,
        "credit":5,
        "room":5
    },
    {
        "id":3,
        "Teacher":"Usman",
        "room":4
    },
    {
        "id":4,
        "credit":1,
        "room":3
    },
    {
        "id":5,
        "credit":6,
        "room":2
    },
    {
        "id":6,
        "credit":7,
        "room":1
    }
]


let combinelist = ndarray.map((item,i)=>{
    return({
        "id":item.id,
        "title":item.title,
        "teacher":item.Teacher,
        "credit":c_hours[i].credit,
        "room":c_hours[i].room
    })


})

console.log(combinelist)