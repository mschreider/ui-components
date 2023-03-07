import React from 'react'
import './ButtonDrawBorder.css'

function ButtonDrawBorder(props) {
    return (
            <button className={(props.className ? 'button draw border ' + props.className : 'button draw border')} {...props} >
                <span>
                    <span>
                        {props.text}
                    </span>
                </span>
            </button>
    )
}

export default ButtonDrawBorder