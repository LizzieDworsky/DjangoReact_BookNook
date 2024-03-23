import BookListItem from "./BookListItem";

const BookList = ({ books }) => {
    console.log(books);
    return (
        books && (
            <div>
                <ul>
                    {books.map((book) => (
                        <BookListItem book={book} />
                    ))}
                </ul>
            </div>
        )
    );
};

export default BookList;
