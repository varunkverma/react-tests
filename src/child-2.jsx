import React from 'react'

const Child2 = ({name,numbers=[]}) => {
    console.log('child2 rendered')
    return (
        <div className = "child2">
            I Don't do anything, {name}
            {numbers}
        </div>
    )
}

export default React.memo(Child2);