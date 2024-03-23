const BookListItem = ({ book }) => {
    console.log(book.volumeInfo.authors);
    const placeHolderImg = "/images/StylizedBookImage.webp";
    const thumbnailUrl =
        book.volumeInfo.imageLinks?.smallThumbnail || placeHolderImg;

    return (
        book && (
            <li>
                <img
                    src={thumbnailUrl}
                    alt="Thumbnail of the book."
                    style={{ maxWidth: "100px" }}
                />
                <h4>{book.volumeInfo.title}</h4>
                <p>Author(s):</p>
                {book.volumeInfo.authors.map((author) => (
                    <p>{author}</p>
                ))}
            </li>
        )
    );
};

export default BookListItem;
