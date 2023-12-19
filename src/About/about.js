import './about.css'
function About(){
    return (
    <>
    <h1 className='exp-edu'>Experience and Education</h1>
    <div className="about-div">
        <div className='education'>
        <hr></hr>
            <div className='grad'>
                
               
                    <h3>Education Details<i>(graduation)</i></h3><p className='edu-detail'>Guru Nanak Dev Engineering College</p><p className='passing'>2020-2024</p>
               
                <div>Stream : B.Tech Information technology</div>
                <div>CGPA: 9.04</div>

            </div><hr></hr>
            <div className='sensec'>
                
                    <h3>Education Details</h3>
                    <p className='edu-detail'>Shaheed e azam shukdev thapar govt. senior secondary school</p><p className='passing'> 2019-2020</p>
                    <div>Stream : <i>Senior secondary examination (Non-Medical)</i></div>
                <div>Percentage: 92%</div>
                
                
            </div><hr></hr>
            <div className='mat'>
           
                    <h3>Education Details<i></i></h3><p className='edu-detail'>Shaheed e azam shukdev thapar govt. senior secondary school</p><p className='passing'> 2017-2018</p>
               
                <div>Stream : <i>Matriculation Examination</i></div>
                <div>Percentage: 87%</div>

           </div>
            <hr></hr>
        </div>
    </div>
    </>)
}
export default About;