type counterReducerStateType = {
    startValue: number
    maxValue: number
    counterValue: number
    error: boolean
    edit: boolean
}

const initialState = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
    error: false,
    edit: true
}


// general type for actions
export type counterReducerActionsType =
    IncCounterValueACType
    | DecrCounterValueACType
    | ResetCounterValueACType
    | SetMaxValueACType
    | SetStartValueACType
    | setEditACType

export const counterReducer = (state: counterReducerStateType = initialState, action: counterReducerActionsType): counterReducerStateType => {
    switch (action.type) {
        case INC_VALUE:
            return {...state, counterValue: state.counterValue + 1}
        case DECR_VALUE:
            return {...state, counterValue: state.counterValue - 1}
        case RESET_VALUE :
            return {...state, counterValue: state.startValue}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.payload.maxValue, edit: action.payload.editState}
        case SET_START_VALUE:
            return {...state, startValue: action.payload.startValue, edit: action.payload.editState}
        case SET_EDIT:
            return {...state, edit: action.payload.value}
        default:
            return state
    }
}

// const for action types

const INC_VALUE = 'INC_VALUE'
const DECR_VALUE = 'DECR_VALUE'
const RESET_VALUE = 'RESET_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_EDIT = 'SET_EDIT'

// Action creators

export const incCounterValueAC = () => {
    return {
        type: INC_VALUE,
    } as const
}
export const decrCounterValueAC = () => {
    return {
        type: DECR_VALUE,
    } as const
}
export const resetCounterValueAC = () => {
    return {
        type: RESET_VALUE,
    } as const
}
export const setMaxValueAC = (maxValue: number, editState: boolean) => {
    return {
        type: SET_MAX_VALUE,
        payload: {
            maxValue,
            editState
        }
    } as const
}
export const setStartValueAC = (startValue: number, editState: boolean) => {
    return {
        type: SET_START_VALUE,
        payload: {
            startValue,
            editState
        }
    } as const
}
export const setEditAC = (value: boolean) => {
    return {
        type: SET_EDIT,
        payload: {
            value
        }
    } as const
}


// types for action creators

type IncCounterValueACType = ReturnType<typeof incCounterValueAC>
type DecrCounterValueACType = ReturnType<typeof decrCounterValueAC>
type ResetCounterValueACType = ReturnType<typeof resetCounterValueAC>
type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
type SetStartValueACType = ReturnType<typeof setStartValueAC>
type setEditACType = ReturnType<typeof setEditAC>