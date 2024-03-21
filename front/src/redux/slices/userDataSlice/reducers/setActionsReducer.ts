import type {IUserDataState} from "../initialState";
import type {IUserAction} from "../../../../types/types";

interface  ISetActionsAction {
    payload: {
        income: IUserAction[],
        expenses: IUserAction[]
    }
}

export const setActionsReducer = (state:IUserDataState, action: ISetActionsAction) => {
    state.user.income = action.payload.income
    state.user.expenses = action.payload.expenses
}