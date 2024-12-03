function validateRegister(user) {
    let valid = true;
    const error = {
        name: false,
        email: false,
        password: false,
        number: false,
    };

    const message = {
        name: "Name cannot be empty",
        email: "Email cannot be empty",
        password: "Password cannot be empty",
        number: "Phone no. must contain numbers only",
    };

    if (user.name === "") {
        valid = false;
        error.name = true;
    }

    if (user.email === "") {
        valid = false;
        error.email = true;
    }

    if (!/^\d+$/.test(user.number)) {
        valid = false;
        error.number = true;
    }

    if (!(user.number.length === 10)) {
        valid = false;
        error.number = true;
        message.number = "Number must be exactly 10 digits long";
    }

    if (user.password === "") {
        valid = false;
        error.password = true;
    } else if (user.password.length < 8) {
        valid = false;
        error.password = true;
        message.password = "Password cannot be less than 8 characters.";
    } else if (user.password.search(/[!@#$%^&*._\-\+=]/) === -1) {
        valid = false;
        error.password = true;
        message.password =
            "Password must containe atleast one of these characters !@#$%^&*._-+=";
    } else if (user.password.search(/[A-Z]/) === -1) {
        valid = false;
        error.password = true;
        message.password =
            "Password must containe atleast one capital letter A-Z";
    } else if (user.password.search(/[a-z]/) === -1) {
        valid = false;
        error.password = true;
        message.password =
            "Password must containe atleast one small letter a-z";
    } else if (user.password.search(/[0-9]/) === -1) {
        valid = false;
        error.password = true;
        message.password = "Password must containe atleast one number 0-9";
    }

    return { valid, error, message };
}

function validateAddress(address) {
    let valid = true;
    const error = {
        phone: false,
        address: false,
        city: false,
        pin: false,
        state: false,
    };

    const message = {
        address: "Address cannot be empty",
        phone: "Phone no. must contain numbers only",
        city: "City is required",
        pin: "Pin is required",
        state: "State is required",
    };

    if (!/^\d+$/.test(address.phone)) {
        valid = false;
        error.phone = true;
    }

    if (!(address.phone.length === 10)) {
        valid = false;
        error.phone = true;
        message.phone = "Number must be exactly 10 digits long";
    }

    if (address.address.length <= 0) {
        valid = false;
        error.address = true;
    }

    if (address.city.length <= 0) {
        valid = false;
        error.city = true;
    }

    if (address.pin.length <= 0) {
        valid = false;
        error.pin = true;
    }

    if (address.state.length <= 0) {
        valid = false;
        error.state = true;
    }

    return { valid, error, message };
}

function validateCard(card) {
    let valid = true;
    const error = {
        card_no: false,
        name: false,
        cvc: false,
        exp: false,
    };

    const message = {
        card_no: "Card no. can only contain numbers",
        name: "Name cannot be empty",
        cvc: "CVC cannot be empty",
        exp: "Exp cannot be empty",
    };

    if (!/^\d+$/.test(card.card_no)) {
        valid = false;
        error.card_no = true;
    }

    if (!(card.card_no.length === 16)) {
        valid = false;
        error.card_no = true;
        message.card_no = "Card number must be exactly 16 digits long";
    }

    if (card.name.length <= 0) {
        valid = false;
        error.name = true;
    }

    if (card.cvc.length <= 0) {
        valid = false;
        error.cvc = true;
    }

    if (card.exp.length <= 0) {
        valid = false;
        error.exp = true;
    }

    return { valid, error, message };
}

export { validateRegister, validateAddress, validateCard };
