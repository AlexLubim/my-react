import React from 'react'
import {ReposLine} from './reposLine/reposLine'
import {ReposTile} from './reposTile/reposTile'


import reposNotFound from './reposNotFound.svg'

const Repositories = ({repos,lang,view})=>{
  if(repos && view==="line"){
    return (
    <div className="reposList">{
      repos.items.map((item) =>
        <ReposLine reposItem={item} lang={lang} key={item.id}/>
    )}
    </div>)
  }else if(repos && view==="tile"){
    return(
    <div className="reposList">{
      repos.items.map((item) =>
        <ReposTile reposItem={item} lang={lang} key={item.id}/>
      )}
    </div>)
  }
  if(!repos){
    return(
      <div className="notFound">
        <img src={reposNotFound} className="notFound__img"></img>
        <p><span className="noResultBlue">NO RESULTS FOUND</span> select other parameters and try again</p>
      </div>
    )
  }
}
export default Repositories

