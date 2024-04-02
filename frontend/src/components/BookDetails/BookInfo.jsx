const BookInfo = ({ bookInfo }) => {
    if (!bookInfo) return null;

    console.log(bookInfo);
    const placeHolderImg = "/images/StylizedBookImage.webp";
    const thumbnailUrl = bookInfo.imageLinks?.thumbnail || placeHolderImg;

    const authors = bookInfo.authors?.map((author) => (
        <li key={author}>{author}</li>
    )) || <li>Unknown</li>;

    return (
        <div>
            <img src={thumbnailUrl} alt={`Cover for book.`} />
            <h2>{bookInfo.title}</h2>
            <h3>Author(s)</h3>
            <ul>{authors}</ul>
        </div>
    );
};

export default BookInfo;
