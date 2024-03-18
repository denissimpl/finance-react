import { Box, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { IFullData } from "../../types/types";

import Toolbar from "./Toolbar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useState } from "react";
import sendSocket from "../../services/sendSocket";
import columns from "./Table/columns";
import filterActions from "./Table/filterActions";

export interface ITableProps{
  socketDataCopy: IFullData,
  type: string
}

const Table: (props: ITableProps) => JSX.Element = (props:ITableProps) => {
    const socketData:IFullData = useSelector((state:RootState) => state.socketData.user)
    const apiRef = useGridApiRef()
    const [selectionModel, setSelectionModel] = useState([])

    

    const onDeleteClick: () => void = () => {
      let newData:IFullData = JSON.parse(JSON.stringify(socketData));
      if (props.type === "expenses") {
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


    return (
    <Box sx={{ height: '600px', width: '45%'}}>
        <Typography sx={{textAlign:"left", fontSize:24}}>
        {props.type == "income" ? "Доходы" : "Расходы"}
        </Typography>
        <Toolbar onDeleteClick={onDeleteClick} type={props.type} />
        <DataGrid
            apiRef={apiRef}
            rows={props.type == "income" ? props.socketDataCopy.income : props.socketDataCopy.expenses}
            columns={columns}
            onRowSelectionModelChange={(newSelection) => {
              setSelectionModel(newSelection);
            }}
            rowSelectionModel={selectionModel}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 8,
                },
            },
            }}
            pageSizeOptions={[8]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        
    </Box>
    )
}

export default Table;