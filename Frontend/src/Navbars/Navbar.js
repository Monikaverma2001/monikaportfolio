import { Link } from 'react-router-dom';
import './Navbar.css'
const scroltohome=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}
const scroltoabout=()=>{
    window.scrollTo({top: 1100, left: 0, behavior: 'smooth' });
   
}
const scroltoproject=()=>{
    window.scrollTo({top: 2100, left: 0, behavior: 'smooth' });
   
}
const scroltoexp=()=>{
    window.scrollTo({top: 3500, left: 0, behavior: 'smooth' });
    
}
const scroltocontact=()=>{
    window.scrollTo({top: 3900, left: 0, behavior: 'smooth' });
}
function Navbar(){


    return (<ul className='navbar'>
        <li className='navbar-items' ><Link className='login-link' onClick={scroltohome} >Home   </Link></li>
        <li className='navbar-items'><Link  className='login-link' onClick={scroltoabout}>Education</Link></li>
        <li className='navbar-items'><Link  className='login-link' onClick={scroltoproject}>Projects</Link></li>
        <li className='navbar-items'><Link  className='login-link' onClick={scroltoexp}>Experience</Link></li>
        <li className='navbar-items'><Link  className='login-link' onClick={scroltocontact}>Contact us</Link></li>
        <li className='navbar-items'><Link to={'/admin'} className='login-link'>Login</Link></li>
    </ul>)
}

export default Navbar;