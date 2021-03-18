import {FETCHREPOS,KEYLANGUAGE,TOGGLEVIEW} from '../types'

const takeDataAPI = (formData) => {
  return (async(dispatch)=>{
    const queryString = '?q=' + encodeURIComponent(`languages:${formData.language}`)
    const request = await fetch(`https://api.github.com/search/repositories${queryString}`,{
      q:queryString
    })
    const json = await request.json()
    dispatch({type:FETCHREPOS,payload:json})
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

export{
  takeDataAPI,
  toggleView,
  keyLang
};