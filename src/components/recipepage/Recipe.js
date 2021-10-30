import classes from './Recipe.module.css'
import dp from '../../images/chef1.jpg'
import React from 'react'

const Recipe = (props) => {
    return (
        <div className={classes.wrapper}>
            <img src={props.img} alt="uploaded image" className={classes.image} />
            <div className={classes.container}>
                <h1 className={classes.title}>{props.title}</h1>
                <p className={classes.text}>{props.text}</p>
            </div>
        </div>
    )
}

Recipe.defaultProps = {
    title: 'Eshaan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt iusto, excepturi delectus velit molestiae doloremque rerum eligendi iure reiciendis culpa repellat quod impedit ea, adipisci quae mollitia provident fugiat! Quasi?',
    img: dp

}
export default Recipe
