export async function getBookDetailsLoader() {
    return getBooksDetailsSearch();
}

async function getBooksDetailsSearch() {
    try {
        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default function BookDetailsPage() {
    return <div>BookDetailsPage</div>;
}
