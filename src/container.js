import React from 'react'
import Plug1 from "./plug1";
import Plug2 from "./plug2";

const ContainerCom = () => {
    return (
        <div className="container">
            {/* <Plug1 /> */}
            <Plug2 />
            <button className="actionBtn">Change</button>
        </div>
    )
}

export default ContainerCom;