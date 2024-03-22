import { useEffect } from 'react';
import ButtonWrapper from "./components/Buttons/ButtonWrapper";
import { NavLink } from "react-router-dom";
import classes from "./Auth.module.scss"
import { endSession, checkSession } from "./Session/Session";
import { getLoggedSelector } from './utils/getLoggedSelector';

const AuthMenu = () => {
    const logged = getLoggedSelector()
    
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