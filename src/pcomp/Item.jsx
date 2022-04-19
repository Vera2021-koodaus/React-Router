import React from 'react';

const Item=(props)=>{
    console.log(props)
    return(
        <div>
         <p>This page is for the item with the ID of {props.match.params.id} .</p>
        </div>
    )
}

export default Item;