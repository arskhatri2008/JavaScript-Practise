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


// Array
// index value starts from 0
// length value starts from 1

// var myFriends = ['kashan','fayyaz','ali','jameel']

// console.log(myFriends[myFriends.length-1])


// for in loop
// for in loop use to find indexes of elements

// var myFriends = ['kashan','fayyaz','ali','jameel']

// for( let elements in myFriends){
//     console.log(elements);
// }

// for of loop
// for of loop works same as for loop works.

// var myFriends = ['kashan','fayyaz','ali','jameel']

// for( let elements of myFriends){
//     console.log(elements);
// }


// forEach
// forEach calls a function for each element in the array
// forEach performs both for in loop and for of loop

// var myFriends = ['kashan','fayyaz','ali','jameel']

// myFriends.forEach((element , index , array)=>{
//     console.log(`${element} index ${index} array ${array}`)
// })


// Search functions in array

// indexOf
// indexOf returns (least) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number / forward search from start to last.

// var myFriends = ['kashan','fayyaz','ali','jameel']

// console.log(myFriends.indexOf('faraz',2))


// lastIndexOf returns (greatest) index of an element within the array equal to an element, or -1 if none is found. It search the element from the last index number / backward search from last to first.

// var myFriends = ['kashan','fayyaz','ali','jameel']

// console.log(myFriends.lastIndexOf('ali' ,1))


// includes
// includes returns boolean value means either search returns in true or false.

// var myFriends = ['kashan','fayyaz','ali','jameel']

// console.log(myFriends.includes('ali' ,3))

//find method
// find method returns the found element in the array. and show "undefined" if not found. only problem is that it returns only one element

// const prices = [50,100,150,200,250,300,350,400,450,500]

// const findPrice = prices.find((price)=>{
//     return price < 300
// })

// console.log(findPrice);

// short arrow method
// console.log(prices.find((price)=> price < 300))


//findIndex method
// find method returns the found index in the array, and show -1 if not found. only problem is that it returns only one element

// const prices = [50,100,150,200,250,300,350,400,450,500]

// const findPrice = prices.findIndex((price)=>{
//     return price < 300
// })

// console.log(findPrice);

// short arrow method
// console.log(prices.findIndex((price)=> price < 300))

// filter method
// filter method returns the new array with all the elements that passes the test. and show [] empty arry if not found.

// const prices = [50,100,150,200,250,300,350,400,450,500]

// const findPrice = prices.filter((element)=>{
//     return element < 300
// })

// console.log(findPrice);


// sort method
// returns the sorted array, the default sort is ascending, built upon converting the elements into strings.

// const months = ['Dec','March','June','Feb','May','Aug','Jan']

// console.log(months.sort());



// sort method on numbers
// however if numbers are sorted as strings, "20" is bigger than "100000" because "2" is bigger than "1".
// because of this the sort() method will produce an incorrect result when sorting numbers.

// const num = [1,5,10000,99,20]

// console.log(num.sort())


// CRUD operations in Array

// push method
// the push method adds one or more elements to the end of the array and returns the new length of the array.

// const animals = ['goat','cow','chicken','sheep','rabbit']

// const newAnimals = animals.push('horse' , 'cat')

// console.log(animals)

// unshift method

// the unshift method adds one or more elements to the beginning of the array and returns the new length of the array.

const animals = ['goat','cow','chicken','sheep','rabbit']

const newAnimals = animals.unshift('horse' , 'cat')

console.log(animals)