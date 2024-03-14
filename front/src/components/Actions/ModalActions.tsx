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
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const socketData = useSelector((state:RootState) => state.socketData.user)
    const [sendSocket, {error}] = useSendMessageMutation()

    const twoWayBinding = (e:ChangeEvent<HTMLInputElement>, 
        callback:(e:ChangeEvent<HTMLInputElement>) => void) => {
        callback(e.target.value)
    }

    const clearInputs = () => {
        setCategory("")
        setAmount("")
        setDate("")
    }

    
    const handleSubmit = async (e:Event) => {
        e.preventDefault()
        props.handleClose()
        let stringDate = date;
        if (!date) {
            
            const dateNow = new Date()
            stringDate = `${dateNow.getFullYear()}-${dateNow.getMonth()+1<10?"0"+(dateNow.getMonth()+1):dateNow.getMonth()+1}-${dateNow.getDate()<10?"0"+dateNow.getDate():dateNow.getDate()}`
            setDate(stringDate)
            
        }
        sendSocket({
            data:{
                login: socketData.login,
                password: socketData.password,
                name: category,
                amount,
                date: stringDate
            },
            method: "PUT",
            type: props.type
        })
        clearInputs()

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
                required
                type="text"
                value={category} 
                onChange={(e) => twoWayBinding(e,setCategory)} 
                sx={inputsStyle} id="outlined-basic" 
                label="Категория" 
                variant="outlined"
                />
            <TextField
                required
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