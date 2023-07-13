var numIdenticalPairs = function(nums) {
    temp = {}
  for (let i=0;i<nums.length;i++){
    temp.hasOwnProperty(nums[i])?temp[nums[i]]+=1 :temp[nums[i]]=1
  }  
 const res= Object.values(temp).reduce((ac,val)=>{
    if(val >1){ac += ((val*(val-1))/2)}
    return ac
  },0)
  return res
};