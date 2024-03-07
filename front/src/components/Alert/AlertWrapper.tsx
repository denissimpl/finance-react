import { Alert } from "@mui/material"
import { notification } from "../../types/types"


const AlertWrapper = (props: notification) => {
    return (
        <Alert severity={props.type} sx={props.sx}>{props.text}</Alert>
    )
}

export default AlertWrapper