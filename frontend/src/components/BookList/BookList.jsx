import { Link } from "react-router-dom";
import BookListItem from "./BookListItem";
import "./BookList.css";

const BookList = ({ books }) => {
    return (
        books && (
            <div className="book-list-container">
                <ul className="book-list">
                    {books.map((book) => (
                        <Link to={`/${book.id}`} key={book.id}>
                            <BookListItem book={book} />
                        </Link>
                    ))}
                </ul>
            </div>
        )
    );
};

export default BookList;
