var arrA =[1,2,4,5,6]
var arrB =[9,10,11,8]
const getUnion = Array.from(new Set([...arrA,...arrB]))
console.log(getUnion);