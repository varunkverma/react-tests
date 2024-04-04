import React, {useRef, useImperativeHandle, forwardRef} from 'react'

const Plug1 = forwardRef((props,ref) => {
    const myRef= useRef()
    console.log(props,myRef)
    useImperativeHandle(ref, () => ({
        actionToDo: () => {
            myRef.current.style.transform = `scale(${props.scale*0.1 + 1})`;
        }
      }))
    return (
        <div className="plug2" ref={myRef}>
            MAKE ME BIGGER
        </div>
    )
});

export default Plug1;