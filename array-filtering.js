let numbers= [1,2,3,4,5,6,7,8,9,10]
let filtered = numbers.filter (function (evenNumber){
  return evenNumber % 2 === 0
});
console.log(filtered)