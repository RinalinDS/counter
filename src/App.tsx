import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {IncrementAndReset} from "./components/IncrementAndReset";
import {SetStartAndMaxValue} from "./components/SetStartAndMaxValue";


const incrementButtonTitle = "Inc"
const resetButtonTitle = "Reset"
const setButtonTitle = "set"
const startValueButtonTitle = "Start value"
const maxValueButtonTitle = "Max value"
const errorMessage = "Incorrect value!"
const editMessage = "Enter value and press \"set\""

function App() {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(startValue)

    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
            if (startValue < 0 || maxValue <= startValue) {
                setError(true)
            } else {
                setError(false)
            }
        }
        ,        [startValue, maxValue]
    )

    useEffect(() => {
        const startValueFromLocalStorage = localStorage.getItem("startValue")
        if (startValueFromLocalStorage) {
            setStartValue(JSON.parse(startValueFromLocalStorage))
            setCounter(JSON.parse(startValueFromLocalStorage))
        }
        const maxValueFromLocalStorage = localStorage.getItem("maxValue")
        if (maxValueFromLocalStorage) {
            setMaxValue(JSON.parse(maxValueFromLocalStorage))

        }
    }, [])


    const setHandler = () => {
        setCounter(startValue)
        setEdit(false)
        setError(false)
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    const incrementHandler = () => {
        setCounter(counter + 1)
    }
    const resetHandler = () => {
        setCounter(startValue)
    }

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
        setEdit(true)
    }

    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value)
        setEdit(true)
    }


    return (
        <div className="grid">
            <SetStartAndMaxValue
                edit={edit}
                error={error}
                maxValue={maxValue}
                maxValueHandler={maxValueHandler}

                startValue={startValue}

                setHandler={setHandler}
                startValueHandler={startValueHandler}
                setTitle={setButtonTitle}
                startValueButtonTitle={startValueButtonTitle}
                maxValueButtonTitle={maxValueButtonTitle}
            />

            <IncrementAndReset
                incrementHandler={incrementHandler}
                resetHandler={resetHandler}
                counter={counter}
                maxValue={maxValue}
                error={error}
                incrementTitle={incrementButtonTitle}
                resetTitle={resetButtonTitle}
                edit={edit}
                errorMessage={errorMessage}
                editMessage={editMessage}


            />


        </div>

    )

}

export default App;


