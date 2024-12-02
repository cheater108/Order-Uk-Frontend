function isLoggedIn() {
    if (localStorage.getItem("token")) return true;
    return false;
}

function selectedAdd() {
    const add = JSON.parse(localStorage.getItem("address"));
    return add;
}
export { isLoggedIn, selectedAdd };
