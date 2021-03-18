import React from 'react'
import reposStarSvg from '../reposStar.svg';
import ReposTag from '../ReposLanguagesTag/ReposLanguagesTag';

const ReposTile = ({reposItem,lang}) => {
  return(
    <div className="reposTile repos">
      <div className="repos__name">
        <span className="repos__title reposTile__title">{reposItem.name}</span>
        <p className="repos__description">{reposItem.description}</p>
      </div>
      <div className="repos__tag">
        <ReposTag lang={lang}/>
      </div>
      <button className="reposTile__button">ADD TO LIST</button>
      <div className="repos__rating">
        <img src={reposStarSvg} className="repos__starSvg"></img>
        <span>{reposItem.stargazers_count}</span>
      </div>
      <span className="reposTile__keysLang">{lang}</span>
    </div>
  )
}

export {ReposTile}