// let arr = [{name:"manas"},2,3,4,5]
// let arc = arr.slice()
// console.log(arr)        
// arr[0]={name:"noname"}
// arr[1]=500
// console.log(arc)        
// console.log(arr)        
const a =()=>{
    let i
    for(i=0;i<100000000;i++){}
    console.log(i)
}
const b =()=>{
    let i= "manas"
    console.log(i)
}
// a()
// b()
const ar = [1,2,3,4,5]
// [1,3,4,5]


// const del=[0,2]
// for(let k=0;k<ar.length;k++){
//     console.log(k)
// 	if(del.includes(k)){
//         console.log("in")
// 		ar.splice(k,1)
// 		k-=1
// 		del.map(item=>item-1)			
// 	}
// 	console.log(del)
// }
// console.log(ar)

function isEven(n) {
  n = Number(n);
    console.log(n);
  return n === 0 || !!(n && !(n%2));
}

let arr = [4,2,6,1,7,8]
arr.every((e)=>isEven(e))