import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookInfo from "../components/BookDetails/BookInfo";
import FavoriteButton from "../components/BookDetails/FavoriteButton";
import Reviews from "../components/Reviews/ReviewsSection";

export async function getBookDetailsLoader({ params }) {
    return getBooksDetailsSearch(params.bookId);
}

async function getBooksDetailsSearch(bookId) {
    try {
        const response1 = await axios.get(
            `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );

        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: "Bearer " + token } : {};
        const response2 = await axios.get(
            `http://localhost:8000/api/book_details/${bookId}/`,
            { headers }
        );
        return { bookInfo: response1.data.volumeInfo, appData: response2.data };
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default function BookDetailsPage() {
    const data = useLoaderData() || [];
    const [bookDetails, setBookDetails] = useState(data);
    const favBookInfo = {
        bookId: bookDetails.appData.book_id,
        isFav: bookDetails.appData.is_favorite,
        title: bookDetails.bookInfo.title,
        thumbnailUrl: bookDetails.bookInfo.imageLinks?.thumbnail,
    };
    console.log(favBookInfo);
    console.log(bookDetails);
    return (
        <div>
            <BookInfo bookInfo={bookDetails.bookInfo} />
            <FavoriteButton favBookInfo={favBookInfo} />
            <Reviews appData={bookDetails.appData} />
        </div>
    );
}
