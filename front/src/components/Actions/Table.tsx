import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { ITableProps, IToolbarProps } from "../../types/types";
import { useState } from "react";
import Toolbar from "./Toolbar";

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
    const apiRef = useGridApiRef()

    return (
    <Box sx={{ height: '600px', width: '45%'}}>
        <Typography sx={{textAlign:"left", fontSize:24}}>
        {props.type == "income" ? "Доходы" : "Расходы"}
        </Typography>
        <Toolbar />
        <DataGrid
            apiRef={apiRef}
            rows={props.type == "income" ? props.socketDataCopy.income : props.socketDataCopy.expenses}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        
    </Box>
    )
}

export default Table;