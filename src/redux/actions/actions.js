import {FETCHREPOS,KEYLANGUAGE,TOGGLEVIEW,FAVORITE,DELETEFAVORITE} from '../types'

const takeDataAPI = ({language}) => {
  return (async(dispatch)=>{
    try{
      const queryString = '?q=' + encodeURIComponent(`languages:${language}`)
      const request = await fetch(`https://api.github.com/search/repositories${queryString}`,{
        q:queryString
      })
      const json = await request.json()
      
      const repos = json.items.map(item => {
        item.favorite = false;
        item.keyLang = language;
        return item;
      })
      dispatch({type:FETCHREPOS,payload:repos})
    }catch(e){
      console.log(e);
    }
    
  })
}
const keyLang = (lang) => {
  return(
    {type:KEYLANGUAGE,payload:lang}
  )
}
const toggleView = (viewType) => {
  return(
    {type:TOGGLEVIEW,payload:viewType}
  )
}
const addFavoriteRep = (favorRep) =>{
  return({type:FAVORITE,payload:favorRep})
}
  
export{
  takeDataAPI,
  toggleView,
  keyLang,
  addFavoriteRep,
};