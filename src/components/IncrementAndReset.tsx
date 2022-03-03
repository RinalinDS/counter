import {UniButton} from "./UniButton";
import React from "react";

type propsType = {
    incrementHandler: () => void
    resetHandler: () => void
    counterValue: number
    maxValue: number
    incrementTitle: string
    resetTitle: string
    errorMessage: string
    editMessage: string
    edit: boolean
    error: boolean
    startValue: number
}


export function IncrementAndReset({
                                      incrementHandler, resetHandler, counterValue,
                                      maxValue, incrementTitle, edit, error, resetTitle, startValue, ...props
                                  }: propsType) {

    const messageToShow = () => {
        if (startValue < 0 || startValue >= maxValue) {
            return props.errorMessage
        } else if (edit) {
            return props.editMessage
        } else {
            return counterValue
        }
    }
    const classNameToShow = () => {
        if (counterValue === maxValue && !edit || startValue < 0 || startValue >=  maxValue) {
            return 'error'
        } else {
            return ''
        }
    }


    return (
        <div className={'block2'}>
            <div className={`${classNameToShow()} counter`}>
                {messageToShow()}

            </div>

            <div className={'buttons'}>
                <UniButton className={'button1'} callback={incrementHandler} title={incrementTitle}
                           disabled={counterValue >= maxValue || edit}/>
                <UniButton className={'button2'} callback={resetHandler} title={resetTitle}
                           disabled={edit}/>
            </div>
        </div>
    )
}