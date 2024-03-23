const BookList = ({ books }) => {
    console.log(books);
    return (
        books && (
            <div>
                <ul>
                    {books.map((book) => (
                        <p>{book.volumeInfo.title}</p>
                    ))}
                </ul>
            </div>
        )
    );
};

export default BookList;
