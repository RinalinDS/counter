import { Button } from "@mui/material";
import React from "react";

type propsType = {
    callback: () => void
    title: string
    disabled: boolean
    className? : string
}

export function UniButton({callback, title, ...props}:propsType) {
    return (

    <Button  className={props.className} onClick={callback} disabled={props.disabled} variant={'contained'}>{title}</Button>
    )

}