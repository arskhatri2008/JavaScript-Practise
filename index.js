// const year = 2024

// if(year % 4 === 0) {
//     console.log('The year ' , year , " is a leap year")
// }else if(year % 100 !== 0) {
//     console.log('The year ' , year , " is not a leap year")
// }else if(year % 400 === 0){
//     console.log('Thea year' , year , " is a leap year")
// }

// if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log('The year ' , year , " is a leap year")
// }


// age = 19

// if(age >= 18){
//     console.log('You are eligible to vote')
// }else{
//     console.log('You are not eligible to vote')
// }

// console.log((age >= 18) ? 'You are eligible to vote' : 'You are not eligible to vote')

// const area = 'circle'
// const PI = 3.14, l=5, b=4, r=3

// if(area === 'circle'){
//     console.log(PI * r**2)
// }else if(area === 'rectangle'){
//     console.log(l * b)
// }else if(area === 'triangle'){
//     console.log(0.5 * l * b)
// }else{
//     console.log('Invalid area')
// }

// switch(area){
//     case 'circle': console.log(PI * r**2)
//     break
//     case 'rectangle': console.log(l * b)
//     break
//     case  'triangle': console.log(0.5 * l * b)
//     break
//     default: console.log('Invalid area')

// }

// let num = 0

// while(num <= 10){
//     num++;
//     console.log(num)
// }

// let num = 20;

// do{
//     num++
//     console.log(num)
// }while(num <= 10)

// for(var num = 0; num <= 10; num++){
//     console.log(num)
// }

// for(var num = 1; num <= 10; num++){
//     var table = 9
//     console.log('8 * ',num,' = ',table*num)
// }

// function sum (a,b) {
//     // var a = 10, b=20
//     var total = a+b
//     console.log(total)
// }

// sum(30,20)


// function bioData(){
//     const myFirstName = 'Arsalan'
//     console.log(myFirstName)

//     if(true){
//         const myLastName = 'Ahmed'
//         console.log('inner ', myFirstName)
//         console.log('inner ', myLastName)
//     }

//     console.log('outer ', myLastName)
// }

// bioData()


//  var => function scope / global scope
//  var and let reassigned their values but const not, const remain constant
// let and const => block scope 
//      {
//          Block Scope
//     }

// Default parameters works when second argument not enter then function automatically use default parameter.
// in (a,b=5) round brackets are called = Parameters
// when calling function and pass variables or number (3,3) are called = Arguments

// function mult(a,b=5){
//     return a*b
// }

// console.log(mult(3,3))



