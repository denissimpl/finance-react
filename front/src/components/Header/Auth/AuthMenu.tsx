import { useEffect } from 'react';
import ButtonWrapper from "./Buttons/ButtonWrapper";
import { NavLink } from "react-router-dom";
import classes from "./Auth.module.scss"
import { useSelector } from "react-redux";
import type { RootState } from '../../../redux/store'
import { endSession, checkSession } from "./Session/Session";

const AuthMenu = () => {
    const logged = useSelector((state: RootState) => state.logged.value)
    
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