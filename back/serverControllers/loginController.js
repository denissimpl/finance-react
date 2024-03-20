const loginController = async (user, api) => {
    const {login, password} = user
    const status = await api.getEntireData({login, password})
    if (!status) {
        return {
            status,
            reason: "Неверное имя пользователя или пароль. "
        }
    }
    return {
        status: true,
        login,
        password
    }
}


module.exports = loginController