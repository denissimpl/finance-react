import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { ISocketData, ITableProps, IToolbarProps } from "../../types/types";

import Toolbar from "./Toolbar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const columns: GridColDef[] = [
    {
        field: "id",
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 110,
      editable: true,
    },
  ];

const Table = (props:ITableProps) => {
    const socketData:ISocketData = useSelector((state:RootState) => state.socketData.user)
    const apiRef = useGridApiRef()
    const onDeleteClick = () => {
      let newData:ISocketData = JSON.parse(JSON.stringify(socketData));
      if (props.type === "expenses") {
        newData.expenses = newData.expenses.filter((obj) => {
          for (let id of apiRef.current.getSelectedRows().keys()){
            if (obj.id == id) {
              return false
            }
          }
          return true
        })
      } else {
        newData.income = newData.income.filter((obj) => {
          for (let id of apiRef.current.getSelectedRows().keys()){
            if (obj.id == id) {
              return false
            }
          }
          return true
        })
      }
      
      
      
      
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