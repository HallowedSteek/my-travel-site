import React from 'react';
import '../style.css';
import pinImg from '../images/pinLocation.png';

export default function Card(props) {



    return (
       <>
        <div className='card-box'>
            <img className='card-image' src={props.imageUrl} alt='location'></img>
            
            <div className='card-content'>
                <div className='card-location'>
                    <img  src={pinImg} alt='pin'></img>
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl}>View on google maps</a>
                </div>

                <div className='card-description'>
                    <h1>{props.title}</h1>
                    <h4>{props.startDate}-{props.endDate}</h4>
                    <p>{props.description}</p>
                </div>
            </div>

           
        </div>
        
        
        {props.id==="3" ? <br></br> : <hr></hr>}
        
       </>
       
    )
}

