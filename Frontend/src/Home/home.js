import { useState } from 'react';
import Navbar from '../Navbars/Navbar';

import './home.css';
import axios from 'axios';


function Home(){

    const[id,setId]=useState()
    const [name,setName]=useState("");
    const [profile,setProfile]=useState("")
    const [location,setLocation]=useState("")
    const [welcome,setWelcome]=useState("")
    const [description,setDescription]=useState("")
  
   
    const handleDetail=async(e)=>{
        e.preventDefault();
        try{
          const result= await  axios.get("http://localhost:4000/admin-detail")
          console.log(result.data[0])
          console.log(result)
          const section1=result.data[0]
          
          setName(section1.my_name)
          setProfile(section1.my_profile)
          setLocation(section1.my_location)
          setWelcome(section1.my_welcome)
          setDescription(section1.my_description)
          setId(section1._id)
        }catch(err)
        {
            console.log(err)
        }
    }

    return (
        <>
          <Navbar />
        <div className='heading'>
            <div className='myname'>{name}</div>
            <div className='job'>
                {profile}
            </div>
            <div className='location'>{location}</div>
        </div>
        
        <div className='home-div' onLoad={handleDetail}>

            <div className='dp'><img src={require("./dp.png")} alt='dp' className='myimage'></img></div>
           <div className='mydetails'> <div className='domain'>{welcome}</div>
            <div className='my-detail'>{description}</div>
            <div className='etalic'>some detail</div>
            <div></div>
            <div></div></div>

        </div>
        
        </>
    )
}
export default Home;