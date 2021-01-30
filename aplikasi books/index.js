
let books = [
    ['javascript for dummies','vincent',20000,300,true],
    ['web design bss','vincent',35000,150,false]
];

class Book {
    constructor(title,author,price,page,issold){
        this.title =title;
        this.author =author;
        this. price = price;
        this.page=page;
        this.issold= issold;
    }
}

function converttoinstance(books){
    //code here
    let result =[];
    books.forEach(book=>{
        let title = book [0];
        let author = book [1];
        let price =book [2];
        let page= book [3];
        let issold= book[4];

        let instancebook = new Book(title,author,price,page,issold)
        result.push(instancebook)
    })
    return result
}

console.log(converttoinstance(books))
// expected result
/*
[
    {
        id:1,
        title:'javascript for dummy;,
        author: 'vincent',
        price: 50000,
        page: 300,
        issold: true
    }
]
*/

const Book = require('./Book')
const converttoinstance = require('./Book')

let books = [
    ['javascript for dummies','vincent',20000,300,true],
    ['web design bss','vincent',35000,150,false]
];

class Book {
    constructor(title,author,price,page,issold){
        this.title =title;
        this.author =author;
        this. price = price;
        this.page=page;
        this.issold= issold;
    }
}

function converttoinstance(books){
    //code here
    let result =[];
    books.forEach(book=>{
        let title = book [0];
        let author = book [1];
        let price =book [2];
        let page= book [3];
        let issold= book[4];

        let instancebook = new Book(title,author,price,page,issold)
        result.push(instancebook)
    })
    return result
}

module.exports=converttoinstance