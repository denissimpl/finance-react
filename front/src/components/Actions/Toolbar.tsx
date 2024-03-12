import { useState } from "react";
import { IToolbarProps } from "../../types/types";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Toolbar = (props: IToolbarProps) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{border:"1px solid rgba(224, 224, 224, 1)", borderRadius: "4px"}}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Добавить 
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
            <Button sx={{margin:2}} variant="contained" color="error">
                Удалить
            </Button>
            <Button sx={{margin:2}} variant="contained" onClick={handleOpen} color="success">
                Добавить
            </Button>
        </Box>
    )
}

export default Toolbar