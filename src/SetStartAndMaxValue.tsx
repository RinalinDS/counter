import {UniButton} from "./UniButton";
import React, {ChangeEvent, LegacyRef} from "react";

type propsType = {
    startValueI : number
    maxValueI: number
    startValueInputRef: LegacyRef<HTMLInputElement>
    startValueHandlerSecondary: (event: ChangeEvent<HTMLInputElement>) => void
    maxValueInputRef: LegacyRef<HTMLInputElement>
    maxValueHandlerSecondary: (event: ChangeEvent<HTMLInputElement>) => void
    setHandler: () => void
    setTitle: string
    edit: boolean
    error: boolean
    startValueButtonTitle: string
    maxValueButtonTitle: string


}

export function SetStartAndMaxValue({startValueI, maxValueI,startValueInputRef,startValueHandlerSecondary,
                                        maxValueInputRef, maxValueHandlerSecondary,
                                        setTitle, setHandler, edit, error, ...props} : propsType) {
    return (
        <div>
            <div>


                <h1>{props.startValueButtonTitle}</h1>


                <input className={error ? "increment" : ""} value={startValueI} type={"number"} ref={startValueInputRef}
                       onChange={startValueHandlerSecondary}/>


                <h1>{props.maxValueButtonTitle}</h1>


                <input className={maxValueI <= startValueI || maxValueI < 0 ? "increment" : ""} value={maxValueI}
                       type={"number"} ref={maxValueInputRef}
                       onChange={maxValueHandlerSecondary}/>


                <p>

                    <UniButton
                        callback={setHandler}
                        title={setTitle}
                        disabled={startValueI < 0 || maxValueI <= startValueI || !edit}
                    />

                </p>


            </div>
        </div>

    )
}