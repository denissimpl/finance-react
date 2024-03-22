import { store } from "../../../../../redux"
import sendSocket from "../../../../../services/sendSocket"
import { IModalProps } from "../ModalActions"
import { makeDate, validate } from "../utils/ModalFunctions"

type IUseModalSubmit = (
    setErrorText: (errors:string) => void, 
    props:IModalProps, 
    category:string, 
    amount: string, 
    date:string, 
    setDate: (date: string) => void,
    clearInputs: () => void
) => void
 

export const useModalSubmit:IUseModalSubmit = (setErrorText, props, category, amount, date, setDate, clearInputs) => {
    return async (e:Event) => {
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
                login: store.getState().userData.user.login,
                name: category,
                amount,
                date: stringDate
            },
            method: "PUT",
            type: props.type
        })
        clearInputs()
    }
    
}