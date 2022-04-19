import React from "react";
const Option=(props)=>{
    return(
        <div>
            <p>this is the contact details of ID:{props.match.params.id} </p>
        </div>
    )
}
export default Option;