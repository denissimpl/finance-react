import {IFullData} from "../../../types/types";
import filterActions from "./filterActions";
import sendSocket from "../../../services/sendSocket";
import {store} from "../../../redux";
import React from "react";


export const onDeleteClickWrapper = (type:string, selectionModel:Number[], setSelectionModel:React.Dispatch<React.SetStateAction<never[]>>) => {
    const userData = store.getState().userData
    return () => {
        let newData:IFullData = JSON.parse(JSON.stringify(userData.user));
        if (type === "expenses") {
            newData.expenses = filterActions(newData.expenses, selectionModel)
        } else {
            newData.income = filterActions(newData.income, selectionModel)
        }
        setSelectionModel([])
        sendSocket({
            data: newData,
            method: "DELETE"
        })
    }
}