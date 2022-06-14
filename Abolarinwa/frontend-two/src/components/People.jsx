import React from 'react';
import './../css/person.css'

const People = ({persons}) => {

  return (
    <>
        <div className="persons">
            {persons.map((person) => (
                <div className="person" key={person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.sex}</p>
                    <em>{person.age}</em>
                </div>
            ))}
        </div>
    </>
  )
}

export default People