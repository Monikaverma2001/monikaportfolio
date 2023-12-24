import { useState } from 'react';
import './Login.css'
import axios from 'axios';

import { Link } from 'react-router-dom';


const Loggin=()=>{
    const [username,setUsername]=useState('admin')
    const [password,setPassword]=useState('')
    const logindata=[username,password]
    console.log(logindata)
    const submitLog=async (e)=>{
        e.preventDefault();
        try{
            
            const log=await axios.post('http://localhost:4000/login/admin',logindata).then((result,err)=>{
            if(result){
                console.log("logged in")
                return (<><h1>{result}</h1></>)
            }
           
        })
        }
        catch(err)
        {
            console.log(err)
            return (<><h1>Error</h1></>)
        }
        
    }
    
    return (<>
    <><div className='log-div'>
        
        <h2 className='log-header'>Log In</h2>
       <form className='log-form' method='post'>
            <div className='form-div'><h4>UserName</h4><input type='text' name='name' value={username} onChange={(e)=>setUsername(e.target.value)}></input></div>
            <div className='form-div'><h4>Password</h4><input type='password' name='name' value={password} onChange={(e)=>setPassword(e.target.value)} ></input></div>
            <button className='login-btn' onClick={submitLog}>LogIn</button>
            <Link to='/' className='back-btn'>Cancel</Link>
       </form>
      
    </div>
    </>
    </>)
}
export default Loggin;