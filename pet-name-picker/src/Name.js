import React from 'react';
import NameData from './NameData.json'

const Name = () => {
    console.log(typeof NameData)
    const results = NameData
    return(
        <div>
            {results.map((name) => (
                <h4>{name.name}</h4>
                ))}
        </div>
    )
}

export default Name;