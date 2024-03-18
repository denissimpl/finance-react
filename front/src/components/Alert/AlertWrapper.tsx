import { Alert } from "@mui/material"

export interface notification{
    text: string,
    type: "success" | "info" | "warning" | "error",
    sx?: object
}


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