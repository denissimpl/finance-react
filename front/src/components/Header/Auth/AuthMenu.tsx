import { useUserLoginMutation } from "../../../redux";
import { useEffect } from 'react';
import {IAuthData, IAuthResponse} from '../../../types/types'
import ButtonWrapper from "./Buttons/ButtonWrapper";
import { NavLink } from "react-router-dom";
import classes from "./Auth.module.scss"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../../../redux/store'
import {login, exit} from '../../../redux/loggedSlice'
import { updateUserData } from "../../../redux/userDataSlice";
import { startLoading, stopLoading } from "../../../redux/loadingSlice";

const AuthMenu = () => {
    const logged = useSelector((state: RootState) => state.logged.value)
    const dispatch = useDispatch()
    const [getData, {isError}] = useUserLoginMutation()


    const LoginRequest = async (login: string, password: string) : Promise<IAuthData | boolean> => {
        try {
            return await getData({login: login, password: password}).unwrap()
        }
        catch (e) {
            return false
            console.log("Error with post request /login")
        }
    }

    
    const checkSession = async () => {
        dispatch(startLoading())
        let login: string | null = localStorage.getItem("userLogin")
        let password: string | null = localStorage.getItem("userPassword")

        if (login && password) {
            if (logged) {
                createSession()
            } else {
                const userData:IAuthData | boolean = await LoginRequest(login, password)
                if (userData && userData.status) {
                    dispatch(updateUserData(userData))
                    createSession()
                }   
            }
        }
        dispatch(stopLoading())
    }
    

    const createSession = () => {
        dispatch(login())
    }

    const endSession = () => {
        dispatch(exit())
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