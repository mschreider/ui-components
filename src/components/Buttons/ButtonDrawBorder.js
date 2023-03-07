import React from 'react'
import './ButtonDrawBorder.less'

function ButtonDrawBorder(props) {
    return (
            <button className={(props.className ? 'button draw border ' + props.className : 'button draw border')}>
                <span>
                    <span>
                        {props.text}
                    </span>
                </span>
            </button>
    )
}

export default ButtonDrawBorder