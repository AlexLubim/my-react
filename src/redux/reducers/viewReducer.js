import {TOGGLEVIEW} from '../types'
const initialState ={
  viewLine:true
}

export const viewReducer = (state=initialState,action) => {
  switch (action.type){
    case TOGGLEVIEW:
      return{
        ...state,
        viewLine:action.payload
      }
    default:return state
  }
  
}