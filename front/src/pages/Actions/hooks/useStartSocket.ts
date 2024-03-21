
import {store} from "../../../redux";
import {IUserAction} from "../../../types/types";
import {useEffect} from "react";
import sendSocket from "../../../services/sendSocket";


export const useStartSocket = () => {
    const login: string = store.getState().userData.user.login
    const password: string = store.getState().userData.user.password
    const income:IUserAction[] = store.getState().userData.user.income
    const expenses:IUserAction[] = store.getState().userData.user.expenses

    useEffect(() => {
        sendSocket({
            method: "GET",
            data: {
                login,
                password
            }
        })
    }, [])

    return {
        income,
        expenses
    }
}