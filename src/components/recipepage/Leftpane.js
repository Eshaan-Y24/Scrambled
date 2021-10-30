import classes from './Leftpane.module.css'
import dp1 from '../../images/chef1.jpg'
import React from 'react'

const Leftpane = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <img className={classes.image} src={dp1} alt="" />
                <h3>{props.name}</h3>
                <h3>{props.joined}</h3>
            </div>
        </div>
    )
}

export default Leftpane
Leftpane.defaultProps = {
    name: 'Default Name',
    joined: '31st Feb'
}
