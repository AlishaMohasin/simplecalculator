import { COUNTER_DECREMENT, COUNTER_INCREMENT,ADDITION,MULTIPLICATION,DIVISION,SUBTRACT } from "./action.type"

export const INCREMENT = () => ({
    type: COUNTER_INCREMENT,
  
})
export const DECREMENT = () => ({
    type: COUNTER_DECREMENT,
  
})
export const MULTIPLY = (value) => ({
    type: MULTIPLICATION,
    payload:value
})
export const ADD = (value) => ({
    type: ADDITION,
    payload:value
})
export const DIVIDE = (value) => ({
    type: DIVISION,
    payload:value
})
export const SUBTRACTION= (value) => ({
    type: SUBTRACT,
    payload:value
})