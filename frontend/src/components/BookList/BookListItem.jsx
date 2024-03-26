const BookListItem = ({ book }) => {
    const placeHolderImg = "/images/StylizedBookImage.webp";
    const thumbnailUrl =
        book.volumeInfo.imageLinks?.smallThumbnail || placeHolderImg;

    return (
        book && (
            <li className="book-list-item">
                <div className="book-item-content">
                    <img
                        src={thumbnailUrl}
                        alt={`Cover for ${book.volumeInfo.title} book.`}
                    />
                    <h4>{book.volumeInfo.title}</h4>
                    <p>Author(s):</p>
                    {book.volumeInfo.authors ? (
                        book.volumeInfo.authors.map((author) => (
                            <p key={author}>{author}</p>
                        ))
                    ) : (
                        <p>Unknown</p>
                    )}
                </div>
            </li>
        )
    );
};

export default BookListItem;
