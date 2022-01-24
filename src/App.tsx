import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './App.css';
import {IncrementAndReset} from "./IncrementAndReset";
import {SetStartAndMaxValue} from "./SetStartAndMaxValue";


function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(startValue)

    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)

    const incrementButtonTitle = "Inc"
    const resetButtonTitle = "Reset"
    const setButtonTitle = "set"
    const startValueButtonTitle = "Start value"
    const maxValueButtonTitle = "Max value"
    const errorMessage = "Incorrect value!"
    const editMessage = "Enter value and press \"set\""


    const [startValueI, setStartValueI] = useState(startValue)
    const [maxValueI, setMaxValueI] = useState(maxValue)

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

    useEffect(() => {
        const startValueFromLocalStorage = localStorage.getItem("startValue")
        if (startValueFromLocalStorage) {
            setStartValue(JSON.parse(startValueFromLocalStorage))
            setStartValueI(JSON.parse(startValueFromLocalStorage))
            setCounter(JSON.parse(startValueFromLocalStorage))
        }
        const maxValueFromLocalStorage = localStorage.getItem("maxValue")
        if (maxValueFromLocalStorage) {
            setMaxValue(JSON.parse(maxValueFromLocalStorage))
            setMaxValueI(JSON.parse(maxValueFromLocalStorage))
        }
    }, [])


    const setHandler = () => {
        const el = maxValueInputRef.current as HTMLInputElement
        setMaxValue(+el.value)
        const el2 = startValueInputRef.current as HTMLInputElement
        setStartValue(+el2.value) // I don't like +
        setCounter(+el2.value) // I don't like this string
        setEdit(false)
        setError(false)
        localStorage.setItem("startValue", JSON.stringify(+el2.value))
        localStorage.setItem("maxValue", JSON.stringify(+el.value))
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
        <div className="grid app">
            <SetStartAndMaxValue
                edit={edit}
                error={error}
                maxValueI={maxValueI}
                maxValueHandlerSecondary={maxValueHandlerSecondary}
                maxValueInputRef={maxValueInputRef}
                startValueI={startValueI}
                startValueInputRef={startValueInputRef}
                setHandler={setHandler}
                startValueHandlerSecondary={startValueHandlerSecondary}
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


