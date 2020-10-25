import React from 'react'



export default ({pageContext})=>{

    console.log(pageContext,'pagecontext')
    return(
        <div>
            <h1>Items</h1>
            <div className='col-md-4 mx-auto'>
    <h3>Name : {pageContext.name}</h3>
    <h4>Price : {pageContext.Price}</h4>
    <h4>Description</h4>
    <p>{pageContext.description}</p>
            </div>
        </div>
    )
}