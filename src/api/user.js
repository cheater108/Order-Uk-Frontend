import api from "./api";

async function postRegister(user) {
    const result = await api.post("/user/register", user);
    return result.data;
}

async function postLogin(user) {
    const result = await api.post("/user/login", user);
    return result.data;
}

async function postAddress(address) {
    const result = await api.post("/user/address", address);
    return result.data;
}

async function getAddress() {
    const result = await api.get("/user/address");
    return result.data;
}

async function postCard(card) {
    const result = await api.post("/user/card", card);
    return result.data;
}

async function getCards() {
    const result = await api.get("/user/card");
    return result.data;
}

async function getCardById(id) {
    const result = await api.get(`/user/card/${id}`);
    return result.data;
}

async function deleteCard(id) {
    const result = await api.delete(`/user/card/${id}`);
    return result.data;
}

async function updateCard(card, id) {
    const result = await api.put(`/user/card/${id}`, card);
    return result.data;
}

export {
    postRegister,
    postLogin,
    postAddress,
    getAddress,
    postCard,
    getCards,
    getCardById,
    deleteCard,
    updateCard,
};
