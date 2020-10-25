import React, { ReactNode } from 'react'
import '../styles/bootstrap.min.css'
import {Link} from 'gatsby'
import Navbar from './Navbar'
type LayoutProps={
    children:ReactNode
}
export default ({children}:LayoutProps)=>{
    return(
        <div>
           <Navbar ></Navbar>

            {children}


            <h1 className='fixed-bottom text-center'>Footer section</h1>


        </div>
    )
}