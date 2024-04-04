import React, {useEffect, useState} from 'react';

const UserInfo = () => {
    const [name, setName] = useState('')
    const [showDarkTheme,setShowDarkTheme] = useState(false);
    useEffect(()=>{
        // fetch jwt from localstorage, extract username and display
        // fetch theme setting as well
    },[])
    
    const storeThemeInLocalStorage = () => {
        const newValue = !showDarkTheme;
    }

    return (
        <div className='userCon' style={showDarkTheme?{backgroundColor:'blue'}:{}}>
            {name || 'UNKNOWN'}
            <button onClick={storeThemeInLocalStorage}>
                Toggle Theme
            </button> 
        </div>
    )
}

export default UserInfo;