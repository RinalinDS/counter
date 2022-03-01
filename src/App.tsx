import React, {ChangeEvent} from 'react';
import './App.css';
import {IncrementAndReset} from "./components/IncrementAndReset";
import {SetStartAndMaxValue} from "./components/SetStartAndMaxValue";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {incCounterValueAC, resetCounterValueAC, setEditAC, setMaxValueAC, setStartValueAC} from "./bll/counterReducer";


const incrementButtonTitle = "Inc"
const resetButtonTitle = "Reset"
const setButtonTitle = "set"
const startValueButtonTitle = "Start value"
const maxValueButtonTitle = "Max value"
const errorMessage = "Incorrect value!"
const editMessage = "Enter value and press \"set\""

function App() {

    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)
    const edit = useSelector<AppRootStateType, boolean>(state => state.counter.edit)
    const dispatch = useDispatch()


    const setHandler = () => {
        dispatch(setEditAC(false))
    }

    const incrementHandler = () => {
        dispatch(incCounterValueAC())
    }
    const resetHandler = () => {
        dispatch(resetCounterValueAC())
    }

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+event.currentTarget.value, true))
    }

    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+event.currentTarget.value, true))

    }


    return (
        <div className="grid">
            <SetStartAndMaxValue
                edit={edit}
                error={error}
                maxValue={maxValue}
                startValue={startValue}
                maxValueHandler={maxValueHandler}
                startValueHandler={startValueHandler}
                setHandler={setHandler}
                setTitle={setButtonTitle}
                startValueButtonTitle={startValueButtonTitle}
                maxValueButtonTitle={maxValueButtonTitle}
            />

            <IncrementAndReset
                startValue={startValue}
                error={error}
                edit={edit}
                incrementHandler={incrementHandler}
                resetHandler={resetHandler}
                counterValue={counterValue}
                maxValue={maxValue}
                incrementTitle={incrementButtonTitle}
                resetTitle={resetButtonTitle}
                errorMessage={errorMessage}
                editMessage={editMessage}
            />


        </div>

    )

}

export default App;


