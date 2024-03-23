import BookListItem from "./BookListItem";
import "./BookList.css";

const BookList = ({ books }) => {
    console.log(books);
    return (
        books && (
            <div className="book-list-container">
                <ul className="book-list">
                    {books.map((book) => (
                        <BookListItem book={book} />
                    ))}
                </ul>
            </div>
        )
    );
};

export default BookList;
