
function fetchBook(cb) {
   fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`)
        .then(data=>data.json())
        .then(({results:{books}})=>cb(books))
       
}
export default fetchBook;