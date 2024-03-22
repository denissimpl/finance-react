import { LoginRequest } from './../../../../services/sendRest';
import { store } from "../../../../redux";
import { startLoading, stopLoading } from "../../../../redux/slices/loadingSlice/loadingSlice";
import { hideNotification, showNotification } from "../../../../redux/slices/notificationSlice/notificationSlice";
import { IAuthData } from "../../../../types/types";
import { exit, login, updateUserData } from '../../../../redux/slices/userDataSlice/userDataSlice';


export const createSession = () => {
    store.dispatch(showNotification({
        text: "Успешный вход",
        type: "success"
    }))
    store.dispatch(login())
    setTimeout(() => {
        store.dispatch(hideNotification())
    }, 2000);
}

export const checkSession = async () => {
    store.dispatch(startLoading())
    let login: string | null = localStorage.getItem("userLogin")
    let password: string | null = localStorage.getItem("userPassword")

    if (login && password) {
        if (store.getState().userData.user.logged) {
            createSession()
        } else {
            const userData:IAuthData | boolean = await LoginRequest({login: login, password: password})
            if (userData && userData.status) {
                store.dispatch(updateUserData(userData))
                createSession()
            }   
        }
    }
    store.dispatch(stopLoading())
}

export const endSession = () => {
    store.dispatch(exit())
    localStorage.removeItem("userLogin")
    localStorage.removeItem("userPassword")
}

