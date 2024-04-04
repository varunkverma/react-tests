import React,{useState} from 'react';

const ParentComponent = ()=>{
    const [counter, setCounter] = useState(0);
    console.log('parent rendered')
    console.log('child1 rendered')
    console.log('child2 rendered')
    return (
        <div className='parent'>
            <div className = "child1">
                <div className='counter-dis'>
                    {counter}
                </div>
                <button onClick = {()=>setCounter(prev => ++prev)}>
                    Increment
                </button>
            </div>
            <div className = "child2">
                I Don't do anything
            </div>
        </div>
    )
}

export default ParentComponent;