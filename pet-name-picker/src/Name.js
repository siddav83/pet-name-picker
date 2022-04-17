import React from 'react';
import NameData from './NameData.json'

const Name = () => {
    const results = NameData
    console.log(results)
    return(
        <>
        {/* <Button bsStyle="primary">Primary</Button> */}
            {results.map((name) => (
                
                <div className=" p-2 bd-highlight col-example"
                 key={name.id}
                 sex = {name.sex === 'f' ? console.log("female"):console.log("male")}><button type="button" className="btn btn-primary">{name.name}</button></div>
                
                ))}
        </>
    )
}

export default Name;