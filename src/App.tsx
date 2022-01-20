import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './App.css';
import {IncrementAndReset} from "./IncrementAndReset";
import {SetStartAndMaxValue} from "./SetStartAndMaxValue";


function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [counter, setCounter] = useState(startValue)

    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)

    const incrementButtonTitle = "Inc"
    const resetButtonTitle = "Reset"
    const setButtonTitle = "set"
    const startValueButtonTitle = "Start value"
    const maxValueButtonTitle = "Max value"
    const errorMessage = "Incorrect value!"
    const editMessage = "Enter value and press \"set\""




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


