import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import {UniButton} from "./UniButton";
import {start} from "repl";

function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [counter, setCounter] = useState(startValue)

    const [edit, setEdit] = useState(false)

    let [startValueI, setStartValueI] = useState(startValue)
    let [maxValueI, setMaxValueI] = useState(maxValue)

    const maxValueInputRef = useRef<HTMLInputElement>(null)
    const startValueInputRef = useRef<HTMLInputElement>(null)

    const set = () => {
        const el = maxValueInputRef.current as HTMLInputElement
        setMaxValue(+el.value)
        const el2 = startValueInputRef.current as HTMLInputElement
        setStartValue(+el2.value)
        setEdit(false)

    }
    const incrementHandler = () => {
        setCounter(counter+1)
    }
    const resetHandler = () => {
        setCounter(startValue)
    }

    const maxValueHandler =(event: ChangeEvent<HTMLInputElement>) => {
        setMaxValueI(+event.currentTarget.value)
        setEdit(true)
    }
    const startValueHandler =(event: ChangeEvent<HTMLInputElement>) => {
        setStartValueI(+event.currentTarget.value)
        setEdit(true)
    }


    return (
        <div className="App">
            <div className={"inline"}>
                <div>
                    <h1>Start value</h1>
                    <input value={startValueI}  type={"number"} ref={startValueInputRef} onChange={startValueHandler} />

                    <h1>max value</h1>
                    <input  value ={maxValueI} type={"number"} ref={maxValueInputRef}  onChange={maxValueHandler}/>
                    <p><UniButton
                        callback={set}
                        title={"set"}
                        disabled={startValueI < 0 || maxValueI <= startValueI}/></p>
                </div>

            </div>
            <div className={"inline"}>
                <div className={counter >=maxValue ? "increment" : ""}>{counter}</div>
                <UniButton callback={incrementHandler} title={"inc"} disabled={counter>=maxValue || edit} />
                <UniButton callback={resetHandler} title={"reset"} disabled={edit} />

            </div>
        </div>

    )

}

export default App;

