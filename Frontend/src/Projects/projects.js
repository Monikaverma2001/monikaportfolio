import './projects.css'


function Projects(){
    return (<div className='projects'>

<h1 className='project-header'>Project</h1>

       <div className='projects-detail'>
	
       <div className='project-div'>
        <img className='image' src={require("./gca.png")} alt="pic"></img>
        <div className='name'>GCA(GNDEC Connect App) </div>
        <div className='detail'>This is institution project for connecting mentor mentee and alumni and facilitates ML to alot mentor to
mentee and It's website already made during minor
Mentoring apps have the potential to serve as valuable tools for establishing meaningful connections,
broadening access to mentors, including Heads of Department (HODs) and experts, enhancing eciency,
ensuring accountability, and promoting both learning and personal growth. By providing a platform for
mentor-HOD relationships, these apps can create opportunities for social and economic advancement
while also enriching the skills and knowledge of individuals and communities.</div>
        <div className='technology'>XML , MongoDB , Java , Realm Cloud, ML</div>
        <div className='link'><a href="https://github.com/https-github-com-GNDECTouch/ConnectApp" className="anchor" alt="link">Code</a></div>

       </div>
       <div className='project-div'>
       <img className='image' src={require("./gca.png")} alt="pic"></img>
        <div className='name'>Networking App:HOD-Mentor network</div>
        <div className='detail'>Mentoring app have the potential to be valuable tools for facilitating meaningful
connections, increasing access to mentors,HOD and expertise, improving eciency,
promoting accountability, and supporting learning and personal growth. By providing a
platform for mentor-HOD relationships, this apps can create opportunities for social and
economic mobility and enhance the skills and knowledge of individuals and communities.</div>
        <div className='technology'>MongoDB, Express, Node, Angular</div>
        <div className='link'><a href="https://github.com/Monikaverma2001/MEANproject" className="anchor" alt="link">Code</a></div>
        </div>
       

       </div>
    </div>)
}
export default Projects;