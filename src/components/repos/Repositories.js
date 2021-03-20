import React from 'react'
import ReposCard from '../reposCard/reposCard'


import reposNotFound from './reposNotFound.svg'

const Repositories = ({repos,lang,view})=>{
    if(!repos || repos.length === 0){
      return(
        <div className="notFound">
          <img src={reposNotFound} className="notFound__img"></img>
          <p><span className="noResultBlue">NO RESULTS FOUND</span> select other parameters and try again</p>
        </div>
      )
    }else{
      return (
        <div className="reposList">{
          repos.map((item) => (item ? <ReposCard reposItem={item} id={item.id} key={item.id} view={view}/> :null)
        )}
        </div>)
    }
}
export default Repositories

