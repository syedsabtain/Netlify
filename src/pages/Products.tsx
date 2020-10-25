import React from 'react'
import Layout from '../Components/Layout'
import {Link} from 'gatsby'

export default()=>{
    return(
        <Layout>
            <div className='container mt-5'>
                <div className='col-md-4 mx-auto'>

                    <Link className='btn btn-outline-danger mt-5 mb-5' to='IPhone'>IPhone</Link>
                    <br/>
                    <Link className='btn btn-outline-danger mt-5' to='Samsung'>Samsung</Link>
                </div>
            </div>

        </Layout>
    )
}