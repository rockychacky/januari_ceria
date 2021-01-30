const Book = require ('./Book')
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