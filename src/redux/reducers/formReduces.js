const initialState ={
  
}

import {FETCHREPOS,KEYLANGUAGE} from '../types'

export const formReducer = (state=initialState,action) => {
  switch (action.type){
    case FETCHREPOS:
      return{
        ...state,
        repositories:action.payload
      }
    case KEYLANGUAGE:
      return{
        ...state,
        keyLang:action.payload
      }
    default:return state
  }
  
}