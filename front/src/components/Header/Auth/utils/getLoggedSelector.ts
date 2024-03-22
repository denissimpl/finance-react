import { store } from "../../../../redux"

export const getLoggedSelector = () => {
    return store.getState().userData.user.logged
}