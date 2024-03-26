export async function getFavoritesLoader() {
    return getFavoritesSearch();
}

async function getFavoritesSearch() {
    try {
        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default function FavoritesPage() {
    return <div>FavoritesPage</div>;
}
