function myFilter(callback){
  let filteredArray = [];
  this.forEach((element) => {
    if(callback(element))
     filteredArray.push(element);
    
  });
  return filteredArray;
}

function myMap (callback){
  let mappedArray = [];
  this.forEach((element) => {
    mappedArray.push(callback(element));
  });
  return mappedArray;
}

Array.prototype.myFilter = myFilter;
Array.prototype.myMap = myMap;


let numbers = [1,0,-2,99,7,12,16];
let moreNumbers = [2,10,15,20,100,1000];
let evenNumbers = (number) => {
  return number % 2 == 0;
};

function divideByTwo(number){
  return number / 2;
};  


console.log('myFilter after being attached to the array Object');
console.log(numbers.myFilter(evenNumbers));
console.log('myMap after being attached to the array Object');
console.log(moreNumbers.myMap(divideByTwo));
