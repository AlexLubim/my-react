import React from 'react'
import {ReposCard} from '../reposCard/reposCard'


import reposNotFound from './reposNotFound.svg'

const Repositories = ({repos,lang,view})=>{
    if(!repos){
      return(
        <div className="notFound">
          <img src={reposNotFound} className="notFound__img"></img>
          <p><span className="noResultBlue">NO RESULTS FOUND</span> select other parameters and try again</p>
        </div>
      )
    }else{
      return (
        <div className="reposList">{
          repos.items.map((item) =>
            <ReposCard reposItem={item} lang={lang} id={item.id} key={item.id} view={view}/>
        )}
        </div>)
    }
}
export default Repositories

