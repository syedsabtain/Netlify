import React from 'react'
import {Router} from '@reach/router'
import Layout from '../Components/Layout'
import Info1 from '../Components/Info1'
import Info2 from '../Components/info2'
import {Link} from 'gatsby'
export default ()=>{

    return(
        <Layout>
            
            <Router basepath='info'>
                
                <Info1 path='info1'></Info1>
                <Info2 path='info2'></Info2>
                 
            </Router>
        </Layout>
    )
}