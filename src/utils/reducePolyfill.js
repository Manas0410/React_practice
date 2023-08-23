Array.prototype.Myreduce = function (callback, initialVal) {
  let accumulator = initialVal;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

let t = [1, 2, 3, 4, 5, 6];
let res = t.Myreduce((ac, val) => {
  ac.push(val * 8);
  return ac;
}, []);
console.log(res);

// Array.prototype.myred = function (callback, initialVal) {
//   let ac = initialVal;
//   for (let i = 0; i < this.length; i++) {
//     if (ac !== undefined) {
//       ac = callback(ac, this[i], i, this);
//     }
//   }
//   return ac;
// };
// let t = [1, 2, 3, 4, 5, 6];
// let res = t.myred((ac, val) => {
//   ac.push(val * 8);
//   return ac;
// }, []);
// console.log(res);
