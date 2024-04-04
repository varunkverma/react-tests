import React, {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const onSubmit = (e) => {
        const jwt = username+"::"+ pass;
        console.log("STORING",jwt)
        setUsername('');
        setPass('');
        // store this in localStoage
    }
    return (
        <div className='login'>
            <input name="username" value = {username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
            <input name="password" value = {pass} onChange={(e)=>setPass(e.target.value)} placeholder='password' />
            <button onClick ={onSubmit}>Submit</button>
        </div>
    )
}

export default Login;