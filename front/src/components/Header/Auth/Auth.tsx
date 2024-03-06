import { useUserLoginMutation } from "../../../redux";
import { useEffect } from 'react';
import {loginResponse} from '../../../types/types'
import ButtonWrapper from "./Buttons/ButtonWrapper";
import { NavLink } from "react-router-dom";
import classes from "./Auth.module.scss"

const Auth = () => {
    let userData:loginResponse;
    let logged: boolean = false
    let login: string, password: string;

    const [getData] = useUserLoginMutation()

    const handleData = async (login: string, password: string) : Promise<void> => {
        try {
            userData = await getData({login: login, password: password}).unwrap()
        }
        catch (e) {
            console.log("Error with post request /login")
        }
    }


    const checkSession = () => {
        login = localStorage.getItem("userLogin") || ""
        password = localStorage.getItem("userPassword") || ""
        if (login && password) {
            handleData(login, password)
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
    }, [])
    
    return (
        <>
        {
            logged?
            <ButtonWrapper text="Выйти" callback={() => {}}/>:
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

export default Auth