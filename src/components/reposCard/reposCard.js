import { useState } from 'react';
import reposStarSvg from '../repos/reposStar.svg';
import ReposTag from '../ReposLanguagesTag/ReposLanguagesTag';
import {connect} from 'react-redux';
import {addFavoriteRep} from '../../redux/actions/actions';


const ReposCard = (props) => {
  const {
    form:{repositories,favoriteRep},
    view,
    id,
    keyInputLang,
    addFavoriteRepFunc,
    reposItem:{favorite,description,name,stargazers_count,keyLang}
  } = props;
  
  const [stateFavorit,setFavor] = useState({
    idRep:id,
  });
  
  const toggleCheckbox = ()=>{
   
    function favorit(repos,favors){
      const toggleFavorit = repos.map(item => {
        if(item.id === stateFavorit.idRep){
          item.favorite = !item.favorite
        }
        return item
      })
      favors.map(item => {
        if(item.id === stateFavorit.idRep && !repos.includes(item)){
          item.favorite = !item.favorite
        }
      })
      const favorites = toggleFavorit.filter(item => (item.favorite))
      const finalFavorit = favors.reduce((acc,item) => {
        if(item.favorite && !acc.includes(item)){
          return [...acc,item]
        }else{
          return acc
        }
      },favorites)

      return finalFavorit
    }
    addFavoriteRepFunc(favorit(repositories,favoriteRep))
  }
  return(
    <div className={view ? "reposLine":"reposTile" + " repos"}>
      <div className="repos__name">
        {(view) ? 
        <input type="checkbox" className="reposCheckbox" defaultChecked={favorite} onClick={toggleCheckbox}></input>:null
        }
        <span className={"repos__title " + (view ? "reposLine__title":"reposTile__title")}>{name}</span>
        <p className="repos__description">{description}</p>
      </div>
      <div className="repos__tag">
        <ReposTag lang={keyLang}/>
      </div>
      {view ? null: <button 
        className={(favorite ? "reposTile__button-active":"")+" reposTile__button"}
        onClick={toggleCheckbox}>
          {favorite ? "REMOVE FROM LIST":"ADD TO LIST"}
        </button>}
      <div className="repos__rating">
        <img src={reposStarSvg} className="repos__starSvg"></img>
        <span>{stargazers_count}</span>
      </div>
      <span className={view ? "reposLine__keysLang":"reposTile__keysLang"}>{keyLang}</span>
    </div>
  )
}

const mapStateToProps = store =>{
  return store
}

const mapDispatchToProps = {
  addFavoriteRepFunc: addFavoriteRep
}
export default connect(mapStateToProps,mapDispatchToProps)(ReposCard)
