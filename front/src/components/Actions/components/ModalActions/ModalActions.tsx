import {Modal, Box, TextField, Typography, Button } from "@mui/material"
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../../../../redux'
import sendSocket from "../../../../services/sendSocket";
import { boxStyle, inputsStyle } from "./utils/ModalStyles";
import { makeDate, validate } from "./utils/ModalFunctions";
import {IUserDataState} from "../../../../redux/slices/userDataSlice/initialState";

export interface IModalProps {
    open: boolean,
    handleClose: () => void,
    type: string
}



const ModalActions = (props: IModalProps) => {
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const userData:IUserDataState = useSelector((state:RootState) => state.userData)
    const [errorText, setErrorText] = useState("")


    const twoWayBinding = (e:ChangeEvent<HTMLInputElement>, 
        callback: React.Dispatch<React.SetStateAction<string>>) => {
        callback(e.target.value)
    }

    const clearInputs: () => void = () => {
        setCategory("")
        setAmount("")
        setDate("")
        setErrorText("")
    }

    
    
    const handleSubmit:(e:Event) => void = async (e:Event) => {
        e.preventDefault()
        const errors:string[] = validate(category, amount)
        if (errors.length) {
            setErrorText(errors.join(". "))            
            return
        }
        props.handleClose()
        let stringDate = date;
        if (!date) {
            stringDate = makeDate()
            setDate(stringDate)
            
        }
        sendSocket({
            data:{
                login: userData.user.login,
                password: userData.user.password,
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
            <Typography component="h4" sx={{m:1, color: "red"}}>
                {errorText}
            </Typography>
            <Button sx={inputsStyle} type="submit" variant="contained">Добавить</Button>
            </Box>
        </Modal>  
    )
}          

export default ModalActions