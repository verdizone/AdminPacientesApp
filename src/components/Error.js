import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div>
            <p className="alert alert-info text-center">{mensaje}</p>
        </div>
    )
}

export default Error
