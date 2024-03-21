import type {IUserAction} from "../../../types/types";
import type {EChartsOption} from "echarts";

export interface IUserDataState {
    user: {
        login: string,
        password: string,
        status: boolean,
        logged: boolean,
        income: IUserAction[],
        expenses: IUserAction[],
        tableOptions: any //EchartOptions, но оно начинает все редьюсеры подсвечивать с ошибкой
    }
}

export const initialState: IUserDataState = {
    user:{
        login: "",
        password: "",
        status: false,
        logged: false,
        income: [],
        expenses: [],
        tableOptions: {
            expenses: {},
            income: {}
        }
    }
}