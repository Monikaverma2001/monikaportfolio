import { useState } from 'react';
import './Login.css'
import axios from 'axios';

import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';


function Loggin(){
    const [authenticated,setAuthenticated]=useState(false)
    const [username,setUsername]=useState('admin')
    const [password,setPassword]=useState('')
    const logindata=[username,password]
    console.log(logindata)
    const submitLog=async (e)=>{
        e.preventDefault();
        try{
            
            const lo=await axios.post('http://localhost:4000/login/admin',logindata).then((result,err)=>{
            if(result){
              
                setAuthenticated(true);
                
            }
           
        })
        }
        catch(err)
        {
            console.log(err)
            
        }
        
        
    }
    if(authenticated===false)
    {
        return (<>
            <><div className='log-div'>
                
                <h2 className='log-header'>Log In</h2>
               <form className='log-form' method='post'>
                    <div className='form-div'><h4>UserName</h4><input type='text' name='name' value={username} onChange={(e)=>setUsername(e.target.value)}></input></div>
                    <div className='form-div'><h4>Password</h4><input type='text' name='name' value={password} onChange={(e)=>setPassword(e.target.value)} ></input></div>
                    <button className='login-btn' onClick={submitLog}>LogIn</button>
                    <button className='login-btn'><Link to='/' className='back-btn'>Cancel</Link></button>
               </form>
              
            </div>
            </>
            </>)
    }
    else{
        return (<><Admin /></>)
    }
    
    
}
export default Loggin;