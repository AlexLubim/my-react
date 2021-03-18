import {combineReducers} from 'redux'
import {formReducer} from './formReduces'
import {viewReducer} from './viewReducer'

export const rootReducer = combineReducers({
  form: formReducer,
  app: viewReducer
})
  
