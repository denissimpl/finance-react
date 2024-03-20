const registerValidation = (login, password) => {
    const validation = {status: true, reason: []}
    if (login.length <2 || password.length <3){
        validation.status = false
        validation.reason.push("Слишком короткий логин или пароль. ")
    }
    if (login === password) {
        validation.status = false
        validation.reason.push("Логин и пароль не должны совпадать. ")
    }
    if (login.length > 20 || password.length > 32){
        validation.status = false
        validation.reason.push("Слишком длинный логин или пароль. ")
    }
    return validation
}

module.exports = registerValidation