const BookInfo = ({ bookInfo }) => {
    console.log(bookInfo);
    const placeHolderImg = "/images/StylizedBookImage.webp";
    const thumbnailUrl = bookInfo.imageLinks?.thumbnail || placeHolderImg;
    return (
        <div>
            <img src={thumbnailUrl} alt={`Cover for book.`} />
            <h2>{bookInfo.title}</h2>
        </div>
    );
};

export default BookInfo;
