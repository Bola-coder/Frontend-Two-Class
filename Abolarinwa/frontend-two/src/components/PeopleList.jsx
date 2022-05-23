import React from 'react';
import peopleArray from './peopleArray';
import People from './People';

const PeopleList = () => {
    return (
        <>
            <People persons={peopleArray}/>
        </>
    )

}

export default PeopleList