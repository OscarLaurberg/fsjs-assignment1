function myMap (array,callback){
  let mappedArray = [];
  array.forEach((element) => {
    mappedArray.push(callback(element));
  });
  return mappedArray;
}

let numbers = [2,10,15,20,100,1000];
function divideByTwo(number){
  return number / 2;
}

function testFunction(array, callback){
  console.log('Array being mapped:')
  console.log(numbers);
  console.log('Using regular map function on array: ')
  console.log(numbers.map(num => num / 2));
  console.log('Using myMap:')
  console.log(myMap(numbers, divideByTwo));

}

testFunction(numbers, divideByTwo);