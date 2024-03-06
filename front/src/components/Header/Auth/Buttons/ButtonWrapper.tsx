import Button from '@mui/material/Button';
import {ButtonWrapperProps} from '../../../../types/types'


const ButtonWrapper = (props: ButtonWrapperProps) => {
    if (props.callback) {
        return (
            <Button onClick={() => props.callback()} color="inherit">{props.text}</Button>
        )
    }

    return (
        <Button color="inherit">{props.text}</Button>
    )
    
}

export default ButtonWrapper