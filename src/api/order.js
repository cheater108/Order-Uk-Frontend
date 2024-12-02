import api from "./api";

async function postOrder(order) {
    const result = await api.post("/order", order);
    return result.data;
}

export default postOrder;
