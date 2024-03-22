import { store } from "../../../redux";
import { startLoading, stopLoading } from "../../../redux/slices/loadingSlice/loadingSlice";
import { hideNotification, showNotification } from "../../../redux/slices/notificationSlice/notificationSlice";
import { login, updateUserData } from "../../../redux/slices/userDataSlice/userDataSlice";
import { LoginRequest, RegisterRequest } from "../../../services/sendRest";
import { IAuthData } from "../../../types/types";
import { IFormProps } from "../AuthForm";


export const useSubmit = ( props:IFormProps, nameValue:string, passwordValue:string, clearInputs: () => void) => {
    

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        store.dispatch(startLoading())
        event.preventDefault();
        let data: IAuthData;
        
        if (props.isLogin) {
        
        data = await LoginRequest({
            login: nameValue,
            password: passwordValue
        })
        if (data.status) {
            store.dispatch(showNotification({
            value:true,
            text:"Успешный вход",
            type: "success"
            }))
            store.dispatch(updateUserData(data))
            store.dispatch(login())
            clearInputs()
            localStorage.setItem("userLogin", data.login!)
            localStorage.setItem("userPassword", data.password!)
        } else {
            store.dispatch(showNotification({
            value:true,
            text: data.reason,
            type: "error"
            }))
        }
        } else {
        data = await RegisterRequest({
            login: nameValue,
            password: passwordValue
        })
        if (data.status) {
            store.dispatch(showNotification({
            value:true,
            text:"Успешная регистрация! Авторизуйтесь!",
            type: "success"
            }))
            clearInputs()
        } else {
            store.dispatch(showNotification({
            value:true,
            text: data.reason,
            type: "error"
            }))
        }
        }
        store.dispatch(stopLoading())
        setTimeout(() => {
        store.dispatch(hideNotification())
        }, 2000);
    }
    
    return submit
}
