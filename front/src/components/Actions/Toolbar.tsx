import { useState } from "react";
import { IToolbarProps } from "../../types/types";
import { Box, Button, TextField, Typography } from "@mui/material";
import ModalActions from "./ModalActions";



const Toolbar = (props: IToolbarProps) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{border:"1px solid rgba(224, 224, 224, 1)", borderRadius: "4px"}}>
            <ModalActions type={props.type} open={open} handleClose={handleClose} />
            <Button sx={{margin:2}} variant="contained" onClick={props.onDeleteClick} color="error">
                Удалить
            </Button>
            <Button sx={{margin:2}} variant="contained" onClick={handleOpen} color="success">
                Добавить
            </Button>
        </Box>
    )
}

export default Toolbar