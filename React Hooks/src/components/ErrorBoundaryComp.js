import React from 'react'

function ErrorBoundaryComp(props) {
    if(props.name === 'Joker') {
        throw new Error("Not a hero");
    }
    return (
        <div>
            {props.name}
        </div>
    )
}

export default ErrorBoundaryComp
