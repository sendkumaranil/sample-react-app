import React from 'react'

function Button(props){
    return (
        <div>
            <span>
                <button type="button" onClick={props.handleClick} style={{width:'120px',height:'50px'}}>
                    {props.text}
                </button>
            </span>
        </div>
    )
}

export default Button