function BookDetails(props) {
    var books = [
      { id: 1001, name: "Master React", price: 670 },
      { id: 1002, name: "Deep DIve into Angular 11", price: 800 },
      { id: 1003, name: "Mongo Essentials", price: 450 }
    ];
    return (
      <div>
        <h1>Book Details</h1>
        <Book books={books} />
      </div>
    );
  }
  function Book(props) {
    return props.books.map((book) => {
      return (
        <div>
        <b>{book.name}</b>
        <p>{book.price}</p>
      </div>
    );
  });
}
export default BookDetails;