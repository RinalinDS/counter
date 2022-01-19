import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './App.css';
import {UniButton} from "./UniButton";


function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [counter, setCounter] = useState(startValue)

    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)

    const incrementTitle = "Inc"
    const resetTitle = "Reset"
    const setTitle = "set"


    let [startValueI, setStartValueI] = useState(startValue)
    let [maxValueI, setMaxValueI] = useState(maxValue)

    const maxValueInputRef = useRef<HTMLInputElement>(null)
    const startValueInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
            if (startValueI < 0 || maxValueI <= startValueI) {
                setError(true)
            } else {
                setError(false)
            }
        }
        ,
        [startValueI, maxValueI, startValue, maxValue, counter]
    )


    const setHandler = () => {
        const el = maxValueInputRef.current as HTMLInputElement
        setMaxValue(+el.value)
        const el2 = startValueInputRef.current as HTMLInputElement
        setStartValue(+el2.value) // i don't like +
        setCounter(+el2.value) // i don't like this string
        setEdit(false)
        setError(false)
    }

    const incrementHandler = () => {
        setCounter(counter + 1)
    }
    const resetHandler = () => {
        setCounter(startValue)
    }

    const maxValueHandlerSecondary = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValueI(+event.currentTarget.value)
        setEdit(true)
    }

    const startValueHandlerSecondary = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValueI(+event.currentTarget.value)
        setEdit(true)
    }


    return (
        <div className="App">
            <div>
                <div>


                    <h1>Start value</h1>


                    <input className={error ?"increment" : ""} value={startValueI} type={"number"} ref={startValueInputRef}
                           onChange={startValueHandlerSecondary}/>


                    <h1>max value</h1>


                    <input className={maxValueI <= startValueI || maxValueI < 0 ? "increment" : ""} value={maxValueI} type={"number"} ref={maxValueInputRef}
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


            <div>
                <div className={counter >= maxValue && !edit || error ? "increment" : ""}>{
                    error ? "incorrect value"
                        : edit ? "enter value and press set"
                            : counter}
                </div>


                <UniButton callback={incrementHandler} title={incrementTitle}
                           disabled={counter >= maxValue || edit}/>
                <UniButton callback={resetHandler} title={resetTitle} disabled={edit}/>

            </div>
        </div>

    )

}

export default App;

