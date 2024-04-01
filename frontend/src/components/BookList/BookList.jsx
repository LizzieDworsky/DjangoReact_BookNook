import { Link } from "react-router-dom";
import BookListItem from "./BookListItem";
import "./BookList.css";

const BookList = ({ books, isFavorite = false }) => {
    return (
        books && (
            <div className="book-list-container">
                <ul className="book-list">
                    {books.map((book) => (
                        <Link
                            to={`/${isFavorite ? book.book_id : book.id}`}
                            key={book.id}
                        >
                            <BookListItem book={book} isFavorite={isFavorite} />
                        </Link>
                    ))}
                </ul>
            </div>
        )
    );
};

export default BookList;
