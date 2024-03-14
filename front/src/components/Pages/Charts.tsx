import { useEffect } from "react"
import Chart from "../Charts/Chart"
import getChartOptions, { clearObjs } from "../Charts/getChartOptions"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux"
import { Box } from "@mui/material"
import { startLoading, stopLoading } from "../../redux/loadingSlice"

let options = {
    expenses: {},
    income: {}
}

const Charts = () => {
    const value = useSelector((state:RootState) => state.loading.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startLoading())
        getChartOptions().then((data) => {            
            options = data
            clearObjs()
            dispatch(stopLoading())
        }).catch(e => console.log(e))
        
    }, [])
    return (
        <Box sx={{display: "flex", justifyContent: "space-evenly", alignItems:"center", height: "calc(100vh - 64px)"}}>
            <Chart option={options.expenses} style={{width: "40%", height: "600px"}} loading={value} />
            <Chart option={options.income} style={{width: "40%", height: "600px"}} loading={value} />
        </Box>
    )
}

export default Charts