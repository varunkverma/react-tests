import React, {useRef} from 'react'
import Plug1 from "./plug1";
import Plug2 from "./plug2";

const ContainerCom = () => {
    const containerRef = useRef();
    const handleAction = () => {
        // ask child
        // hint
        if(containerRef.current && containerRef.current.actionToDo){
            containerRef.current.actionToDo();
        } else {
            console.log("No Idea?")
        }        
    }
    return (
        <div className="container">
            {/* <Plug1 /> */}
            <Plug2 />
            <button className="actionBtn" onClick={handleAction}>Change</button>
        </div>
    )
}

export default ContainerCom;