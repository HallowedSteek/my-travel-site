import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import data from './data';


import './style.css';

export default function App() {

  const cardContent = data.map((item)=>{return <Card {...item}/>}); 

  return (

    <>
      <Nav/>
      <section className='card-section'>
      {cardContent}
      </section>
      
    </>

    );
}

