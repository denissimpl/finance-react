
import Chart from "../../components/Charts/Chart"
import { Box } from "@mui/material"
import {useGetChartData} from "./hooks/useGetChartData";
const Charts = () => {

    const {loading, options} = useGetChartData()

    return (
        <Box sx={{display: "flex", justifyContent: "space-evenly", alignItems:"center", height: "calc(100vh - 64px)"}}>
            <Chart option={options.expenses} style={{width: "40%", height: "600px"}} loading={loading} />
            <Chart option={options.income} style={{width: "40%", height: "600px"}} loading={loading} />
        </Box>
    )
}

export default Charts