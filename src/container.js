import React, {useState,useRef} from 'react'
import Plug1 from "./plug1";
import Plug2 from "./plug2";

const ContainerCom = () => {
    const containerRef = useRef();
    const [scale, setScale] = useState(1);
    console.log(containerRef)
    const handleAction = () => {
        // ask child
        // hint
        if(containerRef.current && containerRef.current.actionToDo){
            containerRef.current.actionToDo();
            setScale(prev=>++prev)
        } else {
            console.log("No Idea?")
        }        
    }
    return (
        <div className="container">
            <Plug1 ref={containerRef} scale={scale} />
            {/* <Plug2 ref={containerRef} rotateCount={scale} /> */}
            <button className="actionBtn" onClick={handleAction}>Change</button>
        </div>
    )
}

export default ContainerCom;