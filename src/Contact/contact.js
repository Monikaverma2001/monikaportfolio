import './contact.css'
import {useState} from "react"
function Contact(){

    const [fname,setName] = useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [descrip,setDes]=useState("")
    const [feed,setFeddback]=useState("")

    const submit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3000",{
            method:"POST",
            body:{
                
            }
        })
    }
    return (<div className='contact-div'>
        <h2 className='contact-header'>Contact Us</h2>
       <form className='contact-form' method='post'>
            <div className='form-div'><h4>First Name</h4><input name='name' type='' value={fname} onChange={(e)=>setName(e.target.value)}></input></div>
            <div className='form-div'><h4>Last Name</h4><input name='name' type='' value={lname} onChange={(e)=>setLname(e.target.value)}></input></div>
            <div className='form-div'><h4>Email</h4><input name='name' type=''  value={email} onChange={(e)=>setEmail(e.target.value)}></input></div>
            <div className='form-div'><h4>Description</h4><input name='name' type='' value={descrip} onChange={(e)=>setDes(e.target.value)}></input></div>
            <div className='form-div'><h4>Feedback</h4><input name='name' type='' value={feed} onChange={(e)=>setFeddback(e.target.value)}></input></div>
            <div className='form-div'><button className='buttons'>Cancel</button><button className='buttons' onClick={submit}>submit</button></div>
       </form>
    </div>)
}

export default Contact;