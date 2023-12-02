import './contact.css'
function Contact(){
    return (<div className='contact-div'>
        <h2 className='contact-header'>Contact Us</h2>
       <form className='contact-form'>
            <div className='form-div'><h4>First Name</h4><input name='name' type=''></input></div>
            <div className='form-div'><h4>Last Name</h4><input name='name' type=''></input></div>
            <div className='form-div'><h4>Email</h4><input name='name' type=''></input></div>
            <div className='form-div'><h4>Description</h4><input name='name' type=''></input></div>
            <div className='form-div'><h4>Feedback</h4><input name='name' type=''></input></div>
            <div className='form-div'><button className='buttons'>Cancel</button><button className='buttons'>submit</button></div>
       </form>
    </div>)
}
export default Contact;