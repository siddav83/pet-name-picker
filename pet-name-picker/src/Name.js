import React from 'react';
import NameData from './NameData.json'

const Name = () => {
    const results = NameData
    console.log(results)
    return(
        <>
        <div className="p-3 bd-highlight col-example">
        {/* <Button bsStyle="primary">Primary</Button> */}
            {results.map((name) => (
                <div 
                 key={name.id}
                 className = {name.sex === 'f' ? ' p-auto m-1 bd-highlight col-example btn btn-info': ' p-auto m-1 bd-highlight col-example btn btn-primary' }>
                 {name.name}
                 </div>
                ))}
        </div>
        </>
    )
}

export default Name;