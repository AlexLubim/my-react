import {TOGGLEVIEW} from '../types'
const initialState ={
  view:'line'
}

export const viewReducer = (state=initialState,action) => {
  switch (action.type){
    case TOGGLEVIEW:
      return{
        ...state,
        view:action.payload
      }
    default:return state
  }
  
}