import { useEffect, useState } from "react";
import "./Admin.css";
import axios from "axios";
import EducationModify from "./EducationModify";

function Admin() {
  const [id, setId] = useState("yes my id");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [welcome, setWelcome] = useState("");
  const [description, setDescription] = useState("");
  const [eduform,setEducationforms]=useState([<EducationModify/>])


  useEffect(() => {
    (async function handleDetail() {
      try {
        const result = await axios.get("http://localhost:4000/admin-detail");
        console.log(result.data[0]);
        console.log(result);
        const section1 = result.data[0];
        console.log("monika");
        setName(section1.my_name);
        setProfile(section1.my_profile);
        setLocation(section1.my_location);
        setWelcome(section1.my_welcome);
        setDescription(section1.my_description);
        setId(section1._id);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const newform=()=>{
    // setEducationforms([...eduform,<EducationModify/>])
  }

  const newdata = [
    { id: id },
    {
      my_name: name,
      my_profile: profile,
      my_location: location,
      my_welcome: welcome,
      my_description: description,
    },
  ];

  const ChangeProfile = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:4000/admin-detail",
        newdata
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <form className="myform">
          <div className="">
            <h1>Hi Admin Change your Details</h1>
            <div>
              <label>Enter your name</label>
            <input
              type="text"
                rows={5}
                className=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
            <label>Enter your name</label>
            <input
              type="text"
                rows={5}
                className=""
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
            <label>Enter your name</label>
            <input
              type="text"
                rows={5}
                className=""
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              />
            </div>

            <div>
            <label>Enter your name</label>
            <input
              type="text"
                rows={5}
                value={welcome}
                onChange={(e) => setWelcome(e.target.value)}
              />
            </div>
            <div>
            <label>Enter your name</label>
              <input
              type="text"
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                value={description}
              />
            </div>

            <button onClick={ChangeProfile}>Save</button>
          </div>
        </form>
      </div>
      <button onClick={()=>setEducationforms([...eduform,<EducationModify/>])}>+</button>
    {eduform?.map((item,i)=>(<>{item}{i}
    <button onClick={()=>setEducationforms([])} >-</button>
    </>))}
   
       
    </>
  );
}
export default Admin;
