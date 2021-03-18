import React from 'react'
import {connect} from 'react-redux'
import {toggleView} from '../../redux/actions/actions'

const Line = (props)=>{
  let clasesTile = "viewFilter__line viewFilter__item"
  if(props.view === "line"){
    clasesTile += " viewFilter__item-active"
  }
  const click =() =>{
    props.toggleView("line")
  }
  return(
    <div className={clasesTile} onClick={click}>
      <div className="line__part part"></div>
      <div className="line__part part"></div>
      <div className="line__part part"></div>
    </div>
  )
}
const mapDispatchToProps = {
  toggleView
}
export default connect(null,mapDispatchToProps)(Line)


