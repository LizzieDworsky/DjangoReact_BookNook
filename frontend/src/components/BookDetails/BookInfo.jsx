import FavoriteButton from "./FavoriteButton";

import "./BookDetails.css";

const BookInfo = ({ bookInfo, favBookInfo }) => {
    if (!bookInfo) return null;

    const placeHolderImg = "/images/StylizedBookImage.webp";
    const thumbnailUrl = bookInfo.imageLinks?.thumbnail || placeHolderImg;

    const authors = bookInfo.authors?.map((author, index) => (
        <li key={`${author}-${index}`}>{author}</li>
    )) || <li>Unknown</li>;
    const categories =
        bookInfo.categories?.map((category, index) => (
            <span key={index} className="book-info-genre-item">
                {category}
            </span>
        )) || null;

    return (
        <div className="book-info-container">
            <div className="book-info-image">
                <img
                    src={thumbnailUrl}
                    alt={`Cover for ${bookInfo.title} book.`}
                />
            </div>
            <div className="book-info-details">
                <h2>{bookInfo.title}</h2>
                <h3>Author(s)</h3>
                <ul>{authors}</ul>
                <p>Page count: {bookInfo.pageCount}</p>
                <FavoriteButton favBookInfo={favBookInfo} />
            </div>
            <div
                className="book-info-description"
                dangerouslySetInnerHTML={{ __html: bookInfo.description }}
            />
            {categories ? (
                <div className="book-info-genres">
                    <h3 className="book-info-genres-heading">Genres</h3>
                    {categories}
                </div>
            ) : null}
        </div>
    );
};

export default BookInfo;
