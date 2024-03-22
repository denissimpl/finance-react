const chartController = async (user, api) => {
    const {login, password} = user
    return await api.getAuthedData({login, password})
}


module.exports = chartController