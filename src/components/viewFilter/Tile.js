import React from 'react'
import {connect} from 'react-redux'
import {toggleView} from '../../redux/actions/actions'

const Tile = (props)=>{
  let clasesTile = "viewFilter__tile viewFilter__item"
  if(props.view === "tile"){
    clasesTile += " viewFilter__item-active"
  }
  const click =() =>{
    props.toggleView(false)
  }
  return(
    <div className={clasesTile} onClick={click}>
      <div className="tile__part part"></div>
      <div className="tile__part part"></div>
      <div className="tile__part part"></div>
      <div className="tile__part part"></div>
    </div>
  )
}
const mapDispatchToProps = {
  toggleView
}
export default connect(null,mapDispatchToProps)(Tile)