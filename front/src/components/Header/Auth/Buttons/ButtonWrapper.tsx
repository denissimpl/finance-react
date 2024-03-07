import Button from '@mui/material/Button';
import {IButtonWrapperProps} from '../../../../types/types'


const ButtonWrapper = (props: IButtonWrapperProps) => {
    if (props.callback !== undefined) {
        return (
            <Button onClick={() => props.callback?.()} color="inherit">{props.text}</Button>
        )
    }

    return (
        <Button color="inherit">{props.text}</Button>
    )
    
}

export default ButtonWrapper