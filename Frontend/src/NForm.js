import React, { useState } from "react";

const NForm = () => {
  let [newform, setNewform] = useState([]);
  function addForm() {
    const newformlist = [...newform, <Form key={newform.length}></Form>];
    setNewform(newformlist);
  }
  const Form = () => {
    return (
      <>
        <form>
          <input type="text"></input>
        </form>
      </>
    );
  };

  return (
    <>
      
      <form>
        <input type="text"></input>
      </form>
      <button onClick={addForm}>+</button>
      {newform.map((form,e)=>{
        return(
          <>
          <div key={e}>{form}</div>
          </>
        )
      })}
    </>
  );
};

export default NForm;
