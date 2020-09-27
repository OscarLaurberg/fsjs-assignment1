let http = require("http");

interface IBook {
  title: String,
  readonly author: string,
  pages?: number,
  published?: Date
}

function readTitle(book: IBook) {
  let bookString = "";
  book.published ? bookString = `${book.title} written by ${book.author}, published on date: ${book.published.toDateString()} ` : bookString = `${book.title} written by ${book.author}`

  return bookString;
    
  }

let horrorBook: IBook = {
  title: 'Nightmare on smølfe-street',
  author: 'Smølfine',
  pages: 25,
  published: new Date()

};

console.log(readTitle(horrorBook));
console.log(readTitle({ author: "Indiana Jones", title: "best book ever" }));


class travelerBook implements IBook {
  title: String;
  readonly author: string;
  pages?: number;
  published?: Date;

  constructor( title: string, author: string, published: Date, pages: number) {
    this.title = title;
    this.author = author;
    published ? this.published = published : null;
    pages ? this.pages = pages : null;
  }
}

interface myFunc {
  (string1: string, string2: string, string3: string) : Array<String>;
}

let myFunc1: myFunc;

myFunc1 = function(string1,string2,string3){
  return [string1,string2,string3];
}

let myFunc2: myFunc;

myFunc2 = function(string1,string2,string3){
  return [string1.toUpperCase(),string2.toUpperCase(),string3.toUpperCase()]
}

let f2 = function logger(f1: myFunc){
  //Simulate that we get data from somewhere and uses the provided function
  let [ a, b, c] = ["A", "B", "C"];
  console.log(f1(a,b,c));
}

f2(myFunc1);
f2(myFunc2);

function randomFunction(string1: string, number1: number, string3: string){
  return [string1,number1,string3];
}

//f2(randomFunction); <--- Error!!