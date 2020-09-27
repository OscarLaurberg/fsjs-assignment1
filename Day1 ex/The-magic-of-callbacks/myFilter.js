function myFilter(array, callback){
  let filteredArray = [];
  array.forEach((element) => {
    if(callback(element))
     filteredArray.push(element);
    
  });
  return filteredArray;
}

let numbers = [1,0,-2,99,7,12,16];
let evenNumbers = (number) => {
  return number % 2 == 0;
};

function testFunction(array, callback){
  console.log('Filtering with .filter method: ')
  console.log(array.filter(callback));
  console.log('Now, with the homemade filter method: ')
  console.log(myFilter(numbers,evenNumbers));
}

testFunction(numbers,evenNumbers);