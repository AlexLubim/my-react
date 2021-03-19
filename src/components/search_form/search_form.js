import {Component} from 'react'

import {connect} from 'react-redux'
import {takeDataAPI,keyLang} from '../../redux/actions/actions'

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputChange: false,
      inputValue:'',
      selectOptionsLang:['Javascript','CSS','HTML',
      'Php','Ruby','C++','Python','C#','Java','Go','Haskel']
    }
  }
  
  submitForm(event){
    event.preventDefault()
    if(this.state.language){
      this.props.takeDataAPI(this.state);
      this.props.keyLang(this.state.language);
    }
  }

  changeInput(event){
    this.setState(()=>({
      [event.target.name]: event.target.value
    }))
  }

  render(){
    return(
      <div className="container">
        <form className="searchForm" onSubmit={(e)=>{this.submitForm(e)}}>
          <select className="searchForm__item searchForm__item-select" placeholder="Type" defaultValue="Type" name="type" onChange={(e)=>{this.changeInput(e)}}>
            <option value="Type" disabled>Type</option>
          </select>
          <select className="searchForm__item searchForm__item-select" placeholder="Type" defaultValue="Language" name="language" onChange={(e)=>{this.changeInput(e)}}>
            <option value="Language" disabled>Language</option>
            {this.state.selectOptionsLang.map(item=>{
              return (
                <option value={item} className="optionLangSelect" key={item}>{item}</option>
              )
            })}
          </select>
  
          <div className="input">
            <span className="input__label">Type here for search</span>
            <input 
              className="searchForm__item searchForm__item-input"
              type="text"
              name = 'inputValue'
              defaultValue={this.state.inputValue}
              onChange = {(e)=>{this.changeInput(e)}}
              placeholder="Type here for search">
            </input>
          </div>
          <button className="searchForm__btn" type="submit">SEARCH</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return state
}
const mapDispatchToProps = {
  takeDataAPI,
  keyLang
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchForm); 