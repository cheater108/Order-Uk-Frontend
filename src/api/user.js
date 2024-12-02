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

export { postRegister, postLogin, postAddress, getAddress, postCard, getCards };
