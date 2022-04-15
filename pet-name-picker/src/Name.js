import React from 'react';
import NameData from './NameData.json'

const Name = () => {
    const results = NameData
    return(
        <div className="d-flex flex-wrap bd-highlight">
            {results.map((name) => (
                <div className="p-2 bd-highlight col-example">{name.name}</div>
                ))}
        </div>
    )
}

export default Name;