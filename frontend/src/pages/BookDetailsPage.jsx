import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookInfo from "../components/BookDetails/BookInfo";
import ReviewsSection from "../components/Reviews/ReviewsSection";

export async function getBookDetailsLoader({ params }) {
    return getBooksDetailsSearch(params.bookId);
}

async function getBooksDetailsSearch(bookId) {
    try {
        const response1 = await getBookInfo(bookId);
        const response2 = await getAppData(bookId);
        return { bookInfo: response1.data.volumeInfo, appData: response2.data };
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getBookInfo(bookId) {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}
async function getAppData(bookId) {
    try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: "Bearer " + token } : {};
        const response = await axios.get(
            `http://localhost:8000/api/book_details/${bookId}/`,
            { headers }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default function BookDetailsPage() {
    const data = useLoaderData() || [];
    const [bookInfo, setBookInfo] = useState(data.bookInfo);
    const [appData, setAppData] = useState(data.appData);
    const favBookInfo = {
        bookId: appData.book_id,
        isFav: appData.is_favorite,
        title: bookInfo.title,
        thumbnailUrl: bookInfo.imageLinks?.thumbnail,
    };

    const updateAppData = async (bookId) => {
        const response = await getAppData(bookId);
        console.log(response);
        if (response.status === 200) {
            setAppData(response.data);
        }
    };

    console.log(favBookInfo);
    console.log(appData);
    return (
        <div>
            <BookInfo bookInfo={bookInfo} favBookInfo={favBookInfo} />
            <ReviewsSection appData={appData} updateAppData={updateAppData} />
        </div>
    );
}
