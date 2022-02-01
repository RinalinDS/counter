import {UniButton} from "./UniButton";
import React from "react";

type propsType = {
    incrementHandler: () => void
    resetHandler: () => void
    counter: number
    maxValue: number
    edit: boolean
    error: boolean
    incrementTitle: string
    resetTitle: string
    errorMessage: string
    editMessage: string


}


export function IncrementAndReset({
                                      incrementHandler, resetHandler, counter,
                                      maxValue, edit, error, incrementTitle, resetTitle, ...props
                                  }: propsType) {
    return (
        <div className={'block2'}>
            <div className={`${counter >= maxValue && !edit || error ? "increment" : ""} ${'counter'}`}>{
                error ? props.errorMessage
                    : edit ? props.editMessage
                        : counter}
            </div>

            <div className={'buttons'}>
                <UniButton className={'button1'} callback={incrementHandler} title={incrementTitle}
                           disabled={counter >= maxValue || edit}/>
                <UniButton className={'button2'} callback={resetHandler} title={resetTitle} disabled={edit}/>
            </div>
        </div>
    )
}