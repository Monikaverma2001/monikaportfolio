import { useState } from 'react';
import './Admin.css'
import axios from 'axios';

function Admin() {
   const[id,setId]=useState("yes my id")
    const [name,setName]=useState("");
    const [profile,setProfile]=useState("")
    const [location,setLocation]=useState("")
    const [welcome,setWelcome]=useState("")
    const [description,setDescription]=useState("")
  
    const newdata=[{id:id},{my_name:name,my_profile:profile,my_location:location,my_welcome:welcome,my_description:description}]
    
    const ChangeProfile=async(e)=>{
        e.preventDefault();
        try{
            const result= await  axios.post("http://localhost:4000/admin-detail",newdata)
            console.log(result)
           
            
          }catch(err)
          {
            console.log(err)
          }
    }
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

    <form onLoad={handleDetail} onSubmit={ChangeProfile}>
      <div className="admin-block">
       
      <h1>Hi Admin Change your Details</h1>
      <div className="">
        <textarea  rows={5} className="" value={name} onChange={(e)=>setName(e.target.value)} />
        <textarea  rows={5} className="" value={profile} onChange={(e)=>setProfile(e.target.value)} />
        <textarea  rows={5} className="" value={location} onChange={(e)=>setLocation(e.target.value)} />
      </div>

      <div className="admin-div">
        <div>
          <img src={require("../Home/dp.png")} alt="dp"></img><br></br>
          
          <br></br>
        </div>
        <div>
         
          <textarea  rows={5} value={welcome} onChange={(e)=>setWelcome(e.target.value)}/>
          <div>
            <textarea
            onChange={(e)=>setDescription(e.target.value)}
            rows={5} 

              value={description}            />
          </div>
          <div className="etalic">some detail</div>
          <div></div>
          <div></div>
        </div>
      </div>
      <button >Change Value</button>
      </div>
     
      </form>
    </>
  );
}
export default Admin;
