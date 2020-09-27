var names = ["Lars", "Peter", "Jan", "Bo"];
console.log(names.join(','));
console.log(names.join(' '));
console.log(names.join('#'));

var numbers = [2, 3, 67, 33]; 

function numberReducer (numberArray) {
  let sum = 0;
  for( i = 0; i < numberArray.length; i++){
      sum += numberArray[i];
  }
  return sum;
}

// Create a reducer function that will return the sum (105) of all values in numbers
const reducer = (accumulator, currentValue) => accumulator + currentValue;


let members = [
  {name : "Peter", age: 18},
  {name : "Jan", age: 35},
  {name : "Janne", age: 25},
  {name : "Martin", age: 22},
 ]

 // Create a reducer function that will return the average age of all members.
function ageReducer (accumulator, member, index, arr) {
  if(index == 1){
    accumulator = accumulator.age;
  }
  if(index == arr.length -1){
    return (accumulator + member.age) / arr.length;
  }else{
    return accumulator + member.age;
  }
}


var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];


function countVotes(votes, vote, index) {
  if (index == 1) {
    let voteList = [];
    voteList[votes] = 1;
    votes = voteList;
  }
  if (!votes[vote]) {
    votes[vote] = 1;
  } else {
    votes[vote] += 1;
  }
  return votes;
}

console.log(numbers.reduce(reducer));
console.log(numberReducer(numbers));
const avgAge = members.reduce(ageReducer);
console.log(avgAge);
console.log(votes.reduce(countVotes));
