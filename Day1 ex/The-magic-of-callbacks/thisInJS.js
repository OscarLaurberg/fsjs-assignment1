
//First example(s) - this

var milk1 = {
  amountInLtr: 1,
  fatPercentage: 0.1,
  price: 8.95,
  tag: 'skimmed',
  details: function() {
    return `Price: ${this.price}, milk-type: ${this.tag}`
  }
}

var milk2 = {
  amountInLtr: 0.5,
  fatPercentage: 1.5,
  price: 10.95,
  tag: 'semi-skimmed'
}

function showMilkTag(){
  return this.tag;
}


console.log(milk1.details());
console.log(milk1.details.call(milk2));
console.log(milk1.details.apply(milk2))
console.log(showMilkTag())
console.log(showMilkTag.call(milk1))
console.log(showMilkTag.apply(milk2))

//Second Example(s) - strict 
function withStrict() {
  'use strict';
  console.log('Below is the result of expression "this === globalThis" when using strict');
  console.log(this === globalThis);
}

function withoutStrict() {
  console.log('Same expression below, this time without strict!');
  console.log(this === globalThis);
}

withStrict();
withoutStrict();

// Third example(s)- bind

let showMilkTagWithFixedTag = showMilkTag.bind({ tag: 'semi-skimmed'});

console.log(showMilkTagWithFixedTag());


