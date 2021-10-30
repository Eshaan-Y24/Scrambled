import classes from './Recipes.module.css'
import Navbar from './Navbar'
import dp2 from '../../images/chef3.jpg'
import React from 'react'
import Recipe from './Recipe'
import Leftpane from './Leftpane'

const Recipes = () => {
    return (
        <div>
            <Navbar />
            <Leftpane />
            <Recipe img={dp2} />
            <Recipe />
            <Recipe />
            <Recipe />
        </div>
    )
}

export default Recipes
