const registerValidation = require("../validations/registerValidation");

const registerController = async (user, api) => {
    const {login, password} = user
    const validation = registerValidation(login,password)
    if (!validation.status) {
        return {
            status: false,
            reason: validation.reason
        }
    }
    const isLoginUsed = await api.isLoginAlreadyUsed({login, password})
    if (isLoginUsed) {
        return {
            status: false,
            reason: "Имя уже занято. "
        }
    }
    const successRegister = await api.createUser({
        login,
        password,
        income: [],
        expenses:  [],
    })
    if (!successRegister) {
        return {
            status:success,
            reason: "creation error. "
        }
    }
    return {
        status:successRegister,
        login,
        password
    }
}


module.exports = registerController