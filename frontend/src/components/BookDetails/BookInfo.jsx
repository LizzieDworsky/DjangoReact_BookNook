const BookInfo = ({ bookInfo }) => {
    if (!bookInfo) return null;

    const placeHolderImg = "/images/StylizedBookImage.webp";
    const thumbnailUrl = bookInfo.imageLinks?.thumbnail || placeHolderImg;

    const authors = bookInfo.authors?.map((author, index) => (
        <li key={`${author}-${index}`}>{author}</li>
    )) || <li>Unknown</li>;
    const categories =
        bookInfo.categories?.map((category, index) => (
            <li key={index}>{category}</li>
        )) || null;

    return (
        <div>
            <img src={thumbnailUrl} alt={`Cover for ${bookInfo.title} book.`} />
            <h2>{bookInfo.title}</h2>
            <h3>Author(s)</h3>
            <ul>{authors}</ul>
            <p>Page count: {bookInfo.pageCount}</p>
            <div dangerouslySetInnerHTML={{ __html: bookInfo.description }} />
            {categories ? (
                <>
                    <h3>Genres</h3>
                    <ul>{categories}</ul>
                </>
            ) : null}
        </div>
    );
};

export default BookInfo;
