import React from 'react'
import{Link} from 'gatsby'
import Layoutcomp from '../Components/Layout'
export default ()=>{

    return(
   <div>
        <Layoutcomp>
        <div>
            hellow world my first Gatsby Application
            <Link to='About'>About page</Link>
        </div>
    </Layoutcomp>
   </div>
    )
}