import React, { Component } from 'react';
import './List.css';
import Card from '../Card/Card'

const List =(props)=>{

  const paintCard =()=>{ return props.data.map((pokemon,i)=><Card key={i}data={pokemon}/>)}


return(
  <section className="List">
    {paintCard()}
  </section>
)
}
export default List;