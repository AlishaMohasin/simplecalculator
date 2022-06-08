import { ADDITION, COUNTER_DECREMENT, COUNTER_INCREMENT, DIVISION, MULTIPLICATION, SUBTRACT } from "./action.type"


export const reducer = (state,action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            state.count++
            return {...state}
        }
        case COUNTER_DECREMENT: {
            state.count--
            return {...state}
        }
      
        case ADDITION: {
            state.count += Number(action.payload);
            return {...state}
        }
        case SUBTRACT: {
            state.count -= Number(action.payload);
            return {...state}
        }
        case MULTIPLICATION: {
            state.count *= Number(action.payload);
            return {...state}
        }
        case DIVISION: {
            state.count =state.count/Number(action.payload);
            return {...state}
      }
            
            
            
      
      
      
       
       
       
       
        
        
        default: {
            return {...state}
            }
    }

}