import api from "./api";

async function shareCart(cart) {
    const result = await api.post("/share", cart);
    return result.data;
}

async function getSharedCart(id) {
    const result = await api.get(`/share/${id}`);
    return result.data;
}

export { shareCart, getSharedCart };
