import React from 'react'
import { Link } from 'gatsby'
import {} from "/src/components/Style/navbar.module.css"



const Navbar = () => {
  return (
    <nav>
        <ul className='button'>

            <li >
<Link to = "/">Home</Link>
            </li>


            <li>
<Link to = "/contact">contact</Link>
            </li>

            <li>
<Link to = "/mercedes">mercedes</Link>
            </li>


        </ul>


    </nav>
  )
}

export default Navbar