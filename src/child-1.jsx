import React,{useState} from 'react'

const Child1 = ({ setNewCounter}) => {
    
    console.log('child1 rendered')
    return (
            <div className = "child1">
                {/* <div className='counter-dis'>
                    {counter}
                </div> */}
                <button onClick = {()=>setNewCounter(prev => ++prev)}>
                    Increment
                </button>
            </div>
    )
}

export default React.memo(Child1);