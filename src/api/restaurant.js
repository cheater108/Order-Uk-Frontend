import api from "./api";

async function getMenu(name) {
    const result = await api.get("/restaurant/menu", { name });
    return result.data;
}

async function getPopularRestaurants() {
    const result = await api.get("/restaurant/popular");
    return result.data;
}

async function searchFood(name) {
    if (name === "") {
        const data = await getMenu("Common");
        return data;
    }
    const result = await api.get(`/restaurant/search?name=${name}`);
    return result.data;
}

export { getMenu, getPopularRestaurants, searchFood };
