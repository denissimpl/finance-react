import { Box, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import type {IUserAction} from "../../types/types";

import Toolbar from "./components/Toolbar/Toolbar";
import { useState } from "react";
import columns from "./utils/columns";
import {onDeleteClickWrapper} from "./utils/onDeleteClickWrapper";

export interface ITableProps{
  tableData: IUserAction[],
  type: string
}

const Table: (props: ITableProps) => JSX.Element = (props:ITableProps) => {
    const apiRef = useGridApiRef()
    const [selectionModel, setSelectionModel] = useState([])
    const onDeleteClick = onDeleteClickWrapper(props.type, selectionModel, setSelectionModel)

    return (
    <Box sx={{ height: '600px', width: '45%'}}>
        <Typography sx={{textAlign:"left", fontSize:24}}>
        {props.type == "income" ? "Доходы" : "Расходы"}
        </Typography>
        <Toolbar onDeleteClick={onDeleteClick} type={props.type} />
        <DataGrid
            apiRef={apiRef}
            rows={props.type == "income" ? props.tableData : props.tableData}
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