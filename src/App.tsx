import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {UniButton} from "./UniButton";
import {start} from "repl";

function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [counter, setCounter] = useState(1)

    const [enterState, setEnterState] = useState(false)
    const [errorState, setErrorState] = useState(false)
    const [counterState, setCounterState] = useState(true)
    const [message, setMessage] = useState("")


    const setValueHanlder = () => {
        setEnterState(false)
        setErrorState(false)
        setCounterState(true)
    }

    const IncrementValueHandler = () => {
        setCounter(counter + 1)
    }
    const ResetValueHandler = () => {
        setCounter(startValue)
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value) // пришлось заглушку с + написать, иначе не понимаю как, и почему стринг?
        if (1 > startValue) {

            setErrorState(true)
            setCounterState(false)
            setEnterState(false)
            setMessage("error")
            console.log(errorState, counterState, enterState, message)
        } else {
            setEnterState(true)
            setCounterState(false)
            setErrorState(false)
            setMessage(" Error")
        }

    }
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value) // пришлось заглушку с + написать, иначе не понимаю как, и почему стринг?


    }

    const errorStateHanlder = () => {
        if (startValue >= maxValue) {
            return true
        } else if (startValue < 0) {
            return true
        } else if (counterState) {
            return counterState
        }
        return false
    }
    const IncrStateHanlder = () => {
        if (counter >= maxValue) {
            return true
        } else if (errorState) {
            return true
        } else if (enterState) {
            return true
        }
        return false
    }
    const resetStateHandler = () => {
        if (errorState) {
            return true
        } else if (enterState) {
            return true
        }
        return false
    }

    let incrementTitle = "Inc"
    let resetTitle = "Reset"
    let setTitle = "Set"

    return (
        <div className="App">
            <div>
                <h1> start value</h1>
                <input value={startValue} type="number"
                       onChange={startValueHandler}/>
                <h1> max value</h1>
                <input value={maxValue} type="number" onChange={maxValueHandler}/>
                <p>
                    <UniButton callback={setValueHanlder} title={setTitle} disabled={errorStateHanlder()}/>
                </p>
            </div>
            <div>
                <div className={counter === maxValue ? "increment" : ""}>
                    {errorState ? message : counter}</div>

                <UniButton callback={IncrementValueHandler} title={incrementTitle} disabled={IncrStateHanlder()}/>
                <UniButton callback={ResetValueHandler} title={resetTitle} disabled={resetStateHandler()}/>
            </div>


        </div>
    );
}

export default App;

