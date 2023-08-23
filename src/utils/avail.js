const p = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
    state: "New York",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Los Angeles",
    state: "California",
    isActive: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    city: "Chicago",
    state: "Illinois",
    isActive: true,
  },
  {
    id: 4,
    name: "Emily Brown",
    city: "Houston",
    state: "Texas",
    isActive: true,
  },
];

const m = p.reduce((ac, val) => {
  let temp = { ...val };
  temp.isActive = val.isActive ? "available" : "unavailable";
  ac.push(temp)
  return ac;
}, []);
console.log(m);
// const temp =(arr)=>{
//   return arr.push(0)
// }
// console.log(temp([1,2,3]))
var a=1;
a=2;
function a(){
console.log("hii");
}
a();
console.log(a);