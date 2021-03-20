import React from 'react'
import {connect} from 'react-redux'
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import ViewFilter from '../viewFilter/viewFilter'
import Repositories from '../repos/Repositories'


const MyList = (props) =>{
  const { app,location:{pathname}} = props;

  return(
    <div className="body">
      <Header pathname={pathname}/>
      <div className="container">
        <div className="myList">MyList</div>
        <ViewFilter />
        <Repositories  
          view={app.viewLine}
          repos={props.form.favoriteRep}
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