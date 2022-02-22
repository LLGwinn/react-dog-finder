import React from 'react';
import DogDetails from './DogDetails';

/** Accepts list of dogs from App and returns info for all dogs in list. */

function DogList ( {dogs} ) {
    const dogList = dogs;

    return (
        <div>
            {dogList.map( dog => {
                return (
                    <DogDetails dogObj={dog} key={dog.name}/>
                )
            })
            }
        </div>
    )
}

export default DogList;