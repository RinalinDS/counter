import React from "react";

type propsType = {
    callback: () => void
    title: string
    disabled: boolean
}

export function UniButton({callback, title, ...props}:propsType) {
    return (
        <button onClick={callback} disabled={props.disabled}>{title}</button>
    )

}