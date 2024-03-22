import {IFullData} from "../../../types/types";
import filterActions from "./filterActions";
import sendSocket from "../../../services/sendSocket";
import {store} from "../../../redux";
import React from "react";


export const onDeleteClickWrapper = (type:string, selectionModel:Number[], setSelectionModel:React.Dispatch<React.SetStateAction<never[]>>) => {
    const userData = store.getState().userData
    return () => {
        let {login, income, expenses} = JSON.parse(JSON.stringify(userData.user));
        if (type === "expenses") {
            expenses = filterActions(expenses, selectionModel)
        } else {
            income = filterActions(income, selectionModel)
        }
        setSelectionModel([])
        sendSocket({
            data: {
                login,
                income,
                expenses
            },
            method: "DELETE"
        })
    }
}