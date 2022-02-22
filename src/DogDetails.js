import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './DogDetails.css';

/** Accepts dog object passed from DogList and getDog function passed from App.
 * 
 *  If no dogObj (so user is coming directly to this url, not from DogList) we find
 *  the dog based on the url.
 * 
 *  If the dog name passed is valid, show dog details.
 *  Otherwise, redirect to /dogs
 */

function DogDetails ( {dogObj, getDog} ) {
    const {name} = useParams();

    const findDog = () => {
        return getDog(name);
    }

    const dog = dogObj ? dogObj : findDog();

    return ( dog ? (
        <div id='DogDetails'>
            <div className="card mb-3" style={{maxWidth: "580px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={dog.src} className="img-fluid rounded-start" alt="photo" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <p className="card-text">
                                <small className="text-muted">Age: {dog.age}</small>
                            </p>
                            <ul className="list-group">
                                {dog.facts.map ( fact => {
                                    return <li className="list-group-item DogDetails-li" key={fact}>{fact}</li>
                                })}
                            </ul>
            
                        </div>
                    </div>
                </div>
            </div>
        </div> )
        : 
        <Redirect to="/dogs" />
        ) 


   
        
    
}

export default DogDetails;