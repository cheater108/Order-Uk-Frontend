import api from "./api";

async function getComments() {
    const result = await api.get("/comments");
    return result.data;
}

export { getComments };
