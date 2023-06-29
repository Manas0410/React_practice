// missing odd in Array
const my =(ar) =>{
    let missing = ar[0]
    for (let i=0;i<ar.length;i++){
        if (ar[i]!= missing){
            return missing
        }
        missing+=2
    }
}
console.log(my([5,7,9,11,15,17]))