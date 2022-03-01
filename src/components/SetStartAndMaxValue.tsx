import {UniButton} from "./UniButton";
import React, {ChangeEvent} from "react";

type propsType = {
    startValue: number
    maxValue: number
    startValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    maxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    setHandler: () => void
    setTitle: string
    edit: boolean
    error: boolean
    startValueButtonTitle: string
    maxValueButtonTitle: string


}


export function SetStartAndMaxValue({
                                        startValue, maxValue, startValueHandler,
                                         maxValueHandler,
                                        setTitle, setHandler, edit, error, ...props
                                    }: propsType) {
    return (
        <div className='block1'>
            <div className={'values'}>
                <div>
                <span>{props.startValueButtonTitle}:
                    <input
                    className={maxValue <= startValue || startValue < 0  ? "increment" : ""}
                    value={startValue}
                    type={"number"}
                    onChange={startValueHandler}/>
                </span>
                </div>


                <div>
                <span>{props.maxValueButtonTitle} : <input
                    className={maxValue <= startValue || maxValue < 0 ? "increment" : ""}
                    value={maxValue}
                    type={"number"}
                    onChange={maxValueHandler}/>
                </span>
                </div>
            </div>
            <div className={'buttons'}>

                <UniButton
                    callback={setHandler}
                    title={setTitle}
                    disabled={startValue < 0 || maxValue <= startValue || !edit}
                />

            </div>


        </div>

    )
}

