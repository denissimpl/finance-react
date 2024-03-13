import {Modal, Box, TextField, Typography, Button } from "@mui/material"
import {IModalProps} from '../../types/types'
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../../redux'
import { useSendMessageMutation } from "../../redux/socketApi";


const boxStyle = {
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

const inputsStyle = {
    width: "100%", 
    m:1
}

const ModalActions = (props: IModalProps) => {

    const twoWayBinding = (e:ChangeEvent<HTMLInputElement>, 
        callback:(e:ChangeEvent<HTMLInputElement>) => void) => {
        callback(e.target.value)
    }

    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const socketData = useSelector((state:RootState) => state.socketData.user)
    const [sendSocket, {error}] = useSendMessageMutation()
    const handleSubmit = async (e:Event) => {
        e.preventDefault()
        props.handleClose()
        
        await sendSocket({
            data:{
                login: socketData.login,
                password: socketData.password,
                name: category,
                amount,
                date
            },
            method: "PUT",
            type: props.type
        })

    }

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            >
            <Box sx={boxStyle} component="form" onSubmit={handleSubmit}>
            <Typography sx={inputsStyle} variant="h6" component="h2">
                Добавить {props.type == "income"? "доход": "расход"}
            </Typography>
            <TextField 
                type="text"
                value={category} 
                onChange={(e) => twoWayBinding(e,setCategory)} 
                sx={inputsStyle} id="outlined-basic" 
                label="Категория" 
                variant="outlined" />
            <TextField
                type="number"
                value={amount} 
                onChange={(e) => twoWayBinding(e,setAmount)}
                sx={inputsStyle} 
                id="outlined-basic" 
                label="Цена" 
                variant="outlined" />
            <TextField 
                value={date}
                onChange={(e) => twoWayBinding(e,setDate)}
                type="date" 
                sx={inputsStyle} 
                id="outlined-basic" 
                variant="outlined" />
            <Button sx={inputsStyle} type="submit" variant="contained">Добавить</Button>
            </Box>
        </Modal>  
    )
}          

export default ModalActions