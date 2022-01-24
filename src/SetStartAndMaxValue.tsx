import {UniButton} from "./UniButton";
import React, {ChangeEvent, LegacyRef} from "react";

type propsType = {
    startValueI: number
    maxValueI: number
    startValueInputRef: LegacyRef<HTMLInputElement> // ?
    startValueHandlerSecondary: (event: ChangeEvent<HTMLInputElement>) => void
    maxValueInputRef: LegacyRef<HTMLInputElement>  // ?
    maxValueHandlerSecondary: (event: ChangeEvent<HTMLInputElement>) => void
    setHandler: () => void
    setTitle: string
    edit: boolean
    error: boolean
    startValueButtonTitle: string
    maxValueButtonTitle: string


}

export function SetStartAndMaxValue({
                                        startValueI, maxValueI, startValueInputRef, startValueHandlerSecondary,
                                        maxValueInputRef, maxValueHandlerSecondary,
                                        setTitle, setHandler, edit, error, ...props
                                    }: propsType) {
    return (
        <div className='block1'>

            <div className={'values'}>
                <div>
                <span>{props.startValueButtonTitle}:  <input
                    className={error ? "increment" : ""}
                    value={startValueI}
                    type={"number"} ref={startValueInputRef}
                    onChange={startValueHandlerSecondary}/>
                </span>
                </div>


                <div>
                <span>{props.maxValueButtonTitle} : <input
                    className={maxValueI <= startValueI || maxValueI < 0 ? "increment" : ""}
                    value={maxValueI}
                    type={"number"} ref={maxValueInputRef}
                    onChange={maxValueHandlerSecondary}/>
                </span>
                </div>
            </div>


            <div className={'buttons'}>

                <UniButton

                    callback={setHandler}
                    title={setTitle}
                    disabled={startValueI < 0 || maxValueI <= startValueI || !edit}
                />

            </div>


        </div>

    )
}

