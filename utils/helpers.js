function isLoggedIn() {
    if (localStorage.getItem("token")) return true;
    return false;
}

function selectedAdd() {
    const add = JSON.parse(localStorage.getItem("address"));
    return add;
}

function cardNumWithSpaces(number) {
    return `xxxx xxxx xxxx ${number.substring(12, 16)}`;
}
export { isLoggedIn, selectedAdd, cardNumWithSpaces };
