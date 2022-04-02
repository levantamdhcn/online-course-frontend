import React from 'react'

const NextBtn = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", borderRadius: '50%' }}
            onClick={onClick}
        />
    )
}

export default NextBtn