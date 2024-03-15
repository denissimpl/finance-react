import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { IFullData, ITableProps } from "../../types/types";
import { useSendMessageMutation } from "../../redux/socketApi";

import Toolbar from "./Toolbar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useState } from "react";

const columns: GridColDef[] = [
    {
        field: "id",
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 110
    },
  ];

const Table: (props: ITableProps) => JSX.Element = (props:ITableProps) => {
    const socketData:IFullData = useSelector((state:RootState) => state.socketData.user)
    const apiRef = useGridApiRef()
    const [sendSocket, {error}] = useSendMessageMutation()
    const [selectionModel, setSelectionModel] = useState([])

    const onDeleteClick: () => void = () => {
      let newData:IFullData = JSON.parse(JSON.stringify(socketData));
      if (props.type === "expenses") {
        newData.expenses = newData.expenses.filter((obj) => {
          for (let id of selectionModel){
            if (obj.id == id) {
              return false
            }
          }
          return true
        })
      } else {
        newData.income = newData.income.filter((obj) => {
          for (let id of selectionModel){
            if (obj.id == id) {
              return false
            }
          }
          return true
        })
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