import React, {useRef, useImperativeHandle, forwardRef} from 'react'

const Plug2 = forwardRef((props,ref) => {
    const myRef= useRef()
    console.log(props,myRef)
    useImperativeHandle(ref, () => ({
        actionToDo: () => {
            myRef.current.style.transform = `rotate(${45*props.rotateCount}deg)`;
            
        }
      }))
    return (
        <div className="plug2" ref={myRef}>
            ROTATE ME
        </div>
    )
});

export default Plug2;