import { Alert } from "@mui/material"
import { notification } from "../../types/types"


const AlertWrapper = (props: notification) => {
    return (
        <Alert severity={props.type} sx={{
            position: "fixed", 
            width: "100%",
            display: "flex",
            justifyContent: "center",
            bottom: 0
            }}>{props.text}</Alert>
    )
}

export default AlertWrapper