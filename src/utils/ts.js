// const employee = [
//     {
//       name: 'John',
//       designation: 'manager',
//       age: 25,
//     },
//     {
//       name: 'David',
//       designation: 'UI developer',
//       age: 22,
//     },
//     {
//       name: 'Jason',
//       designation: 'UI developer',
//       age: 24,
//     },
//     {
//       name: 'Jacob',
//       designation: 'Module Lead',
//       age: 32,
//     },
//     {
//       name: 'Anthony',
//       designation: 'System Engineer',
//       age: 31,
//     },
//   ];


// function foo() {
//   let a=b=0;
//   a++ 
//   return a

// }
// foo();
// console.log(typeof a)
// console.log(typeof b)
let arr = [
  {
      name: 'var',
      val: 'a'
  },
  {
      name: 'var',
      val: 'a'
  },
  {
      name: 'var',
      val: 'c'
  },
  {
      name: 'var',
      val: 'a'
  },
  {
      name: 'var',
      val: 'b'
  },
  {
      name: 'var',
      val: 'a'
  },
]
const str = arr.reduce((ac,data)=>{
  if (!ac.includes(data.val)){
    ac.push(data.val)
  }
  else{ac[0].push(data.val)}
  return ac
},[[]])
let temp = [...new Set(str[0])]
console.log(temp)
const result = temp.map((tempData)=>{
  console.log(tempData)
const res = arr.filter((arData)=>arData.val !==tempData)
// arr = [...res]
// console.log("inside ardata",arr)
return res
})
// const res = arr.filter((arData)=>arData.val !==temp[0])

console.log(result)
