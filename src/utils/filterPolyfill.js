Array.prototype.MyFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

console.log([1, 2, 3, 4, 5, 6].MyFilter((a) => a > 2));
// let t = [1, 2, 3, 4, 5, 6];
// let res = t.reduce((ac, val) => {
//   ac.push(val * 8);
//   return ac;
// }, []);
// console.log(res);
