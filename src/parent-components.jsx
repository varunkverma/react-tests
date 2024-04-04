import React,{useState, useMemo, useCallback} from 'react';
import Child1 from "./child-1"
import Child2 from "./child-2"
const ParentComponent = ()=>{
    const [counter, setCounter] = useState(0);
    console.log('parent rendered')
    const numbers = useMemo(()=>[1,2,3,4],[]);
    const updateCounter = useCallback((v)=>setCounter(v),[])
    return (
        <div className='parent'>
            {counter}
            <Child1 setNewCounter={updateCounter} />
            <Child2 name={'Tara'} numbers={numbers} />
        </div>
    )
}

export default ParentComponent;