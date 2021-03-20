import React from 'react'
import {connect} from 'react-redux'
import Tile from './Tile'
import Line from './Line'


const ViewFilter = (storeForm) =>{
  return(
    <div className="viewFilter">
      <Tile view={storeForm.viewLine} />
      <Line view={storeForm.viewLine} />
    </div>
  )
}

const mapStateToProps = store =>{
  return store.app
}

export default connect(mapStateToProps,null)(ViewFilter)