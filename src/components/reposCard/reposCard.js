import {useState} from 'react'
import reposStarSvg from '../repos/reposStar.svg'
import ReposTag from '../ReposLanguagesTag/ReposLanguagesTag'

const ReposCard = ({reposItem,lang,view,id}) => {
  const [{stateFavorit,setFavor}] = useState({
    idRep:id,
    favorite:false
  });

  const toggleCheckbox = ()=>{
    console.log(stateFavorit);
  }

  return(
    <div className={view ? "reposLine":"reposTile" + " repos"}>
      <div className="repos__name">
        {view ? <input type="checkbox" className="reposCheckbox" onClick={toggleCheckbox}></input>:null}
        <span className={"repos__title " + (view ? "reposLine__title":"reposTile__title")}>{reposItem.name}</span>
        <p className="repos__description">{reposItem.description}</p>
      </div>
      <div className="repos__tag">
        <ReposTag lang={lang}/>
      </div>
      {view ? null: <button className="reposTile__button">ADD TO LIST</button>}
      <div className="repos__rating">
        <img src={reposStarSvg} className="repos__starSvg"></img>
        <span>{reposItem.stargazers_count}</span>
      </div>
      <span className={view ? "reposLine__keysLang":"reposTile__keysLang"}>{lang}</span>
    </div>
  )
}

export {ReposCard}
