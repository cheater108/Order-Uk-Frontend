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

export { validateRegister };
