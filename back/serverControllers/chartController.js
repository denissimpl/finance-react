const chartController = async (user, api) => {
    const {login, password} = user
    return await api.getEntireData({login, password})
}


module.exports = chartController