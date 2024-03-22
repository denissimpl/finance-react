import { store, userApi } from "../../../redux"
import { IFullData, IFullDataResponse, IUserAction } from "../../../types/types";

export interface IIncomeOptionsMonthsValue {
  date:number,
  amount:number
} 

export interface IChartOption {
    [key: string] : number
}


function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString('ru-Ru', { month: 'long' });
}



let expMonObj:IChartOption = {}
let incMonObj:IChartOption = {}
let expMonArr:Array<Object> = new Array()
export const clearObjs = () => {
    expMonObj = {}
    incMonObj = {}
    expMonArr = new Array()
}


const getChartData = async () => {
    const dispatch = store.dispatch
    const response: IFullDataResponse  = await dispatch(userApi.endpoints.getCharts.initiate({
        login: store.getState().userData.user.login,
        password: store.getState().userData.user.password
    }))
    return response.data
}

const handleChartData = async () => {
    const data:IFullData = await getChartData()
    const date:Date = new Date()
    const currentMon:number = date.getMonth()
    const expenses:IUserAction[] = Array.from(data.expenses)
    const income:IUserAction[] = Array.from(data.income)
    for (let obj of income) {
        let date = new Date(obj.date)
        
        if (incMonObj[String(new Date(date.getFullYear()+"-"+date.getMonth()+"-01"))] ) {
            incMonObj[String(new Date(date.getFullYear()+"-"+date.getMonth()+"-01"))] +=
            Number(obj.amount)
        } else {
          incMonObj[String(new Date(date.getFullYear()+"-"+date.getMonth()+"-01"))] = Number(obj.amount)
        }
    }
    for (let obj of expenses) {
        let buyDate:number = new Date(Date.parse(obj.date)).getMonth()
        if (buyDate == currentMon){
            if (expMonObj[obj.name.toLowerCase()]) {
                expMonObj[obj.name.toLowerCase()] += Number(obj.amount)
            } else {
              expMonObj[obj.name.toLowerCase()] = Number(obj.amount)
            }
        }
    }

    for (let prop in expMonObj) {
        expMonArr.push({
            value: expMonObj[prop],
            name: prop.charAt(0).toUpperCase()
            + prop.slice(1)
        })
    }
    
}

const getExpensesOptions = () => {
    let month = new Date().toLocaleString('default', {month: 'long'})
    const expensesOptions = {
        title: {
          text: 'Расходы',
          subtext: month,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Расходы',
            type: 'pie',
            radius: '60%',
            
            data: expMonArr,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      return expensesOptions
}



const getIncomeOptions = () => {
    let monthsValues:IIncomeOptionsMonthsValue[] = []
    for (let prop in incMonObj){
        let date = new Date(prop)
        monthsValues.push({date :date.getMonth(), amount : incMonObj[prop]})
    }
    monthsValues.sort((a,b) => {
        return Number(a.date) - Number(b.date)
    })

    let chartMonths = []
    let chartAmounts = []
    for (let obj of monthsValues) {
        chartMonths.push(getMonthName(obj.date))
        chartAmounts.push(obj.amount)
    }

    const incomeOptions = {
        title: {
            text: 'Доходы',
            subtext: new Date().getFullYear(),
            left: 'center'
        },
        xAxis: {
          type: 'category',
          data: chartMonths
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: chartAmounts,
            type: 'line',
            smooth: true
          }
        ]
      };
    return incomeOptions
}



const getChartOptions = async () => {
    await handleChartData()
    return {
        income:getIncomeOptions(),
        expenses:getExpensesOptions()
    }

}



export default getChartOptions
