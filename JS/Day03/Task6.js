var library = {
    books: [
        { title: "Requim for a dream ", author: "hans zimmer", year: 2000 },
        { title: "Manchister by the sea", author: "aaaa", year: 2015 },
        { title: "little women", author: "jo march", year: 1925 }
    ]
};


function logBookTitles(lib) {
    for (var i = 0; i < lib.books.length; i++) {
        console.log(lib.books[i].title);
    }
}

logBookTitles(library);
