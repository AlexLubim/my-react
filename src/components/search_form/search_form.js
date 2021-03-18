import React from 'react'
import {connect} from 'react-redux'
import {takeDataAPI,keyLang} from '../../redux/actions/actions'

const SearchForm = (props) => {
  const [formState, setForm] = React.useState(
    {
      inputChange:false,
      inputValue:''
    }
  )

  const formInputFocus = () => {
    setForm(prev => ({...prev,inputChange:true}))
  }

  const formInputBlur = () => {
    setForm(prev => ({...prev,inputChange:false}))
  }
  
  const labelInput = () => {
    if(formState.inputChange){
      return "input__label-active"
    }else{
      return "input__label"
    }
  }
  
  const submitForm = event => {
    event.preventDefault()
    props.takeDataAPI(formState);
    props.keyLang(formState.language);
    // setForm({inputValue:''})
  }

  const changeInput = event => {
    setForm(prev => ({...prev,...{
      [event.target.name]: event.target.value,
    }}))
  }
  return(
    <div className="container">
      <form className="searchForm" onSubmit={submitForm}>
        <select className="searchForm__item searchForm__item-select" placeholder="Type" defaultValue="Type" name="type" onChange={changeInput}>
          <option value="Type" disabled>Type</option>
        </select>
        <select className="searchForm__item searchForm__item-select" placeholder="Type" defaultValue="Language" name="language" onChange={changeInput}>
          <option value="Language" disabled>Language</option>
          <option value="Javascript" >Javascript</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="Php">Php</option>
          <option value="Ruby">Ruby</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
          <option value="C#">C#</option>
          <option value="Java">Java</option>
          <option value="Go">Go</option>
          <option value="Haskel">Haskel</option>
        </select>

        <div className="input">
          <span className={labelInput()}>Type here for search</span>
          <input 
            className="searchForm__item searchForm__item-input"
            type="text"
            name = 'inputValue'
            onFocus={formInputFocus} 
            value={formState.inputValue}
            onBlur={formInputBlur}
            onChange = {changeInput}
            placeholder="Type here for search">
          </input>
        </div>
        <button className="searchForm__btn" type="submit">SEARCH</button>
      </form>
    </div>
    
  ) 
}


const mapStateToProps = state =>{
  return {
    formStore:state.form
  }
}
const mapDispatchToProps = {
  takeDataAPI,
  keyLang
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchForm); 