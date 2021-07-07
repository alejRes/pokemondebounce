import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { debounce } from 'lodash';
import './Main.css';
import Card from '../Card/Card'
import List from '../List/List'
const Main =()=>{
  const[name,setName]=useState("")
  const[pokemon,setPokemon]=useState({})
  const[listPokemon,setListPokemon]=useState([])
  const[validate, setValidate]=useState(false)
  const[visible, setVisible]=useState(false)
  const[viewList,setViewList]=useState(false)

const pokeFecht = async (namePokemon) =>{
  try {
    console.log(`namepokemon`, namePokemon)
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    console.log(`res.data`, res.data)
    setPokemon(res.data)
    setValidate(true)
    setVisible(true)
  } catch (error) {
    setValidate(true)
    setVisible(false)
  }
}

const debounceHandlechange = debounce((nameInput)=>
    nameInput.length>2?(
      setName(nameInput),
      pokeFecht(nameInput)
    )
      :setValidate(false)
    ,1000)

const handleChange = (e)=>{
  
  debounceHandlechange(e.target.value.toLowerCase())
}

useEffect(()=>{
  
  // console.log(listPokemon.some(item=>item.name === pokemon.name))
  if(!listPokemon.some(item=>item.name === pokemon.name)&& pokemon.name)
    setListPokemon([...listPokemon, pokemon])
    setViewList(true)

},[pokemon])

  return(
    <div className="Main">
      <h3>Último pokemon buscado: {name}</h3>
      <input type="text" onChange={handleChange}/>
      {validate?visible?<Card data={pokemon}/> : <p>El pokemon buscado no existe</p> : <p>Campo vacio o nombre demasido corto</p>}
      {viewList?(<List data={listPokemon}/>):<></>}
    </div>
  )
}
export default Main;