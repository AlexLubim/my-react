import React from 'react'
import {connect} from 'react-redux'
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import ViewFilter from '../viewFilter/viewFilter'
import Repositories from '../repos/Repositories'


const MyList = (props) =>{
  const { app: {view} } = props;

  return(
    <div className="body">
      <Header/>
      <div className="container">
        <div className="myList">MyList</div>
        <ViewFilter />
        <Repositories  
          view={props.app.view}
          repos={props.form.repositories}
          lang={props.form.keyLang}
        />
      </div>
      <Footer/> 
    </div>
  )
}

const mapStateToProps = state =>{
  return state
}
export default connect(mapStateToProps,null)(MyList);