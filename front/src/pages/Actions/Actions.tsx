
import { Box } from "@mui/material";
import Table from "../../components/Actions/Table";
import {useStartSocket} from "./hooks/useStartSocket";


const Actions = () => {


    const data = useStartSocket()

    return (
        <Box sx={{display:"flex", justifyContent:"space-evenly", mt:2}}>
          <Table tableData={data.expenses} type="expenses"></Table>
          <Table tableData={data.income} type="income"></Table>
        </Box>
      );
}

export default Actions;