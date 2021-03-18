import React from 'react'
import reposStarSvg from '../reposStar.svg'
import ReposTag from '../ReposLanguagesTag/ReposLanguagesTag'

const ReposLine = ({reposItem,lang}) => {

  return(
    <div className="reposLine repos">
      <div className="repos__name">
        <input type="checkbox" className="reposCheckbox"></input>
        <span className="repos__title reposLine__title">{reposItem.name}</span>
        <p className="repos__description">{reposItem.description}</p>
      </div>
      <div className="repos__tag">
        <ReposTag lang={lang}/>
      </div>
      <div className="repos__rating">
        <img src={reposStarSvg} className="repos__starSvg"></img>
        <span>{reposItem.stargazers_count}</span>
      </div>
      <span className="reposLine__keysLang">{lang}</span>
    </div>
  )
}

export {ReposLine}
