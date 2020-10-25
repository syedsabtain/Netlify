import React from 'react'
import {Link} from 'gatsby'
import Layoutcomp from '../Components/Layout'
import style from './About.module.css'
export default function About(){

    return(
       <Layoutcomp>
            <div className='container text-center'>
             <div className='col-md-4 mx-auto text-center'>
             <h1 className={style.color}>About page greate amazing</h1>
             <button className='btn btn-outline-danger'>Button</button>
            <Link to='/'>Home</Link>
             </div>
        </div>
       </Layoutcomp>
    )
}