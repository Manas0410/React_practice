Array.prototype.MyMap = function(callback){
    let temp = []
    for(let i=0 ;i<this.length;i++){
        temp.push(callback(this[i],i,this))
    }
    return temp
}
console.log([1,2,3,4,5,6].MyMap((a)=>a+4))