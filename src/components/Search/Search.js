import React from 'react'
import {connect} from 'react-redux'
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import SearchForm from '../search_form/search_form.js';
import ViewFilter from '../viewFilter/viewFilter'
import Repositories from '../repos/Repositories'


const Search = (props) =>{
  const {app:{viewLine},form:{repositories,keyInputLang},location:{pathname}} = props
  return(
    <div className="body">
      <Header pathname={pathname}/>
      <div className="container">
        <SearchForm />
        <ViewFilter />
        <Repositories  view={viewLine} repos={repositories} keyInputLang={keyInputLang}/>
      </div>
      <Footer/> 
    </div>
  )
}

const mapStateToProps = state =>{
  return state
}
export default connect(mapStateToProps,null)(Search);