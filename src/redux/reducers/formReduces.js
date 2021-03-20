const initialState ={
  favoriteRep: [],
  repositories:[]
};

import {FETCHREPOS,KEYLANGUAGE,FAVORITE} from '../types'

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
    case FAVORITE:
      return{
        ...state,
        favoriteRep: action.payload
      }
    default:return state
  }
}