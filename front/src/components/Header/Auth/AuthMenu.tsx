import { useUserLoginMutation } from "../../../redux";
import { useEffect } from 'react';
import {IAuthResponse} from '../../../types/types'
import ButtonWrapper from "./Buttons/ButtonWrapper";
import { NavLink } from "react-router-dom";
import classes from "./Auth.module.scss"
import { useSelector } from "react-redux";
import type { RootState } from '../../../redux/store'


const AuthMenu = () => {
    const logged = useSelector((state: RootState) => state.logged.value)
    const [getData] = useUserLoginMutation()

    const LoginRequest = async (login: string, password: string) : Promise<IAuthResponse | boolean> => {
        
        try {
            return await getData({login: login, password: password}).unwrap()
        }
        catch (e) {
            return false
            console.log("Error with post request /login")
        }
    }

    
    const checkSession = () => {
        let login = localStorage.getItem("userLogin") || ""
        let password = localStorage.getItem("userPassword") || ""
        if (login && password) {
            let userData = LoginRequest(login, password)
            localStorage.setItem("userLogin", userData.login)
            localStorage.setItem("userPassword", userData.password)
            if (userData.status) {
                createSession()
                return true
            }
            return false
        }
        return false
    }
    
    const createSession = () => {
        logged = true
    }

    const endSession = () => {
        logged = false
        localStorage.removeItem("userLogin")
        localStorage.removeItem("userPassword")
    }
   
    
    useEffect(() => {
        checkSession()
    }, [logged])
    
    return (
        <>
        {
            logged?
            <ButtonWrapper text="Выйти" callback={endSession}/>:
            <>
            <NavLink to="login" className={classes.link}>
                <ButtonWrapper text="Войти"/>
            </NavLink>
            <NavLink to="register" className={classes.link}>
                <ButtonWrapper text="Регистрация"/>
            </NavLink>
            
            </>
        }
        </>
    )
}

export default AuthMenu