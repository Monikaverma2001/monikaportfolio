import './Navbar.css'
const scroltohome=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}
const scroltoabout=()=>{
    window.scrollTo({top: 900, left: 0, behavior: 'smooth' });
   
}
const scroltoproject=()=>{
    window.scrollTo({top: 1950, left: 0, behavior: 'smooth' });
   
}
const scroltoexp=()=>{
    window.scrollTo({top: 3200, left: 0, behavior: 'smooth' });
    
}
const scroltocontact=()=>{
    window.scrollTo({top: 3600, left: 0, behavior: 'smooth' });
}
function Navbar(){
    return (<ul className='navbar'>
        <li className='navbar-items' ><button onClick={scroltohome}>Home   </button></li>
        <li className='navbar-items'><button onClick={scroltoabout}>Education</button></li>
        <li className='navbar-items'><button onClick={scroltoproject}>Projects</button></li>
        <li className='navbar-items'><button onClick={scroltoexp}>Experience</button></li>
        <li className='navbar-items'><button onClick={scroltocontact}>Contact us</button></li>
        <li className='navbar-items'><button >Log In</button></li>
    </ul>)
}

export default Navbar;