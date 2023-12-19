import './home.css';


function Home(){
    return (
        <>
        <div className='heading'>
            <div className='myname'>Monika Verma</div>
            <div className='job'>
                Software Developer
            </div>
            <div className='location'>India</div>
        </div>
        
        <div className='home-div'>

            <div className='dp'><img src={require("./dp.png")} alt='dp' className='myimage'></img></div>
           <div className='mydetails'> <div className='domain'>Hi! I am Full Stack Developer</div>
            <div className='my-detail'>To make it easier for you to express your unique style, we’ve created a new set of blog themes for you to choose from. Each theme comes in a variety of colors, is fully customizable, and can be added to your blog with just a few clicks.
These themes aren’t only designed to look great, they’re designed to work great too. Each one has been built to automatically adjust to any screen and load quickly, so you can rest assured that your readers will be able to easily see your work whe</div>
            <div className='etalic'>some detail</div>
            <div></div>
            <div></div></div>

        </div>
        </>
    )
}
export default Home;