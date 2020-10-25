import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from '../Components/Layout';

export default({pageContext})=>{

    const {itemDetails} = pageContext;
    console.log(itemDetails.image.file.url,'fetcing data')

    return(
        <Layout>
            <div className='container'>
            <div className='col-md-4'>
            <div className="card">
  <img src={itemDetails.image.file.url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{itemDetails.name}</h5>
    <p className="card-text">{documentToReactComponents(itemDetails.description.json)}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
            </div>
            
        </div>
        </Layout>
    )
}