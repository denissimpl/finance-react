import type {IUserDataState} from "../initialState";
import type {EChartsOption} from "echarts";

interface ITableOptions {
    payload: {
        expenses: EChartsOption,
        income: EChartsOption
    }
}

export const setTableOptionsReducer = (state:IUserDataState, action: ITableOptions) => {
    state.user.tableOptions.expenses = action.payload.expenses
    state.user.tableOptions.income = action.payload.income
}