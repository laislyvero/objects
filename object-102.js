//using functions in objects
let myBook1 = {
    title:"Harry Potter" ,
    author:"JK Rowlings" ,
    pageCount: 600,
};


 let myBook2= {
    title:"Safe Harbour" ,
    auther:"Daniella Steel" ,
    pageCount:700,
 };
 
 let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}` ,
    };
 };
 let bookSummary = getSummary(myBook1);
 console.log(bookSummary.summary);

 let bookSummary2 = getSummary(myBook2);
 console.log(bookSummary2.summary);