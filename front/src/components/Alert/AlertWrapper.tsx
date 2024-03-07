import { Alert } from "@mui/material"
import { FormInfo } from "../../types/types"


const AlertWrapper = (props: FormInfo) => {
    return (
        <Alert severity={props.value} sx={props.sx}>{props.text}</Alert>
    )
}

export default AlertWrapper