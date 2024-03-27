const BookListItem = ({ book, isFavorite }) => {
    const placeHolderImg = "/images/StylizedBookImage.webp";
    const thumbnailUrl = isFavorite
        ? book.thumbnail_url
        : book.volumeInfo.imageLinks?.smallThumbnail || placeHolderImg;
    const title = isFavorite ? book.title : book.volumeInfo.title;
    const authors = isFavorite ? null : book.volumeInfo.authors;

    const renderAuthors = () => {
        if (!authors) return <p>Unknown</p>;
        return authors.map((author) => <p key={author}>{author}</p>);
    };

    return (
        book && (
            <li className="book-list-item">
                <div className="book-item-content">
                    <img src={thumbnailUrl} alt={`Cover for ${title} book.`} />
                    <h4>{title}</h4>
                    {!isFavorite && (
                        <>
                            <p>Author(s):</p>
                            {renderAuthors()}
                        </>
                    )}
                </div>
            </li>
        )
    );
};

export default BookListItem;
