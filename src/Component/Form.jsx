import React, { useState,useEffect } from "react";
import "./Form.css";
import { useLocation } from "react-router-dom";

function Form() {
  const {state}= useLocation();
  const {movieObj} = state;
  const [data,setData]= useState([]);


  const url = `https://api.tvmaze.com/shows/` + movieObj;

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    
  }, []);
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeValue = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };


  return (
    <>
    <div className="main2">
      <div className="picture2">
        <img src={ data.image != null
                  ? data.image.original
                  : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png"}></img>
      
      </div>

      <div className="form">
        <div className="input">

        
          
            <h1>BookShow</h1>
         
          <h6> ShowName: {data.name}</h6>
         
         <div className="forminput">
            <input type="text" placeholder=" type your name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="type your email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="type your password" onChange={(e) => setPassword(e.target.value)} />

         </div>
        
        
              </div>
        
          
      
        <div className="submit">
          <button type="sumbit" onClick={storeValue}>Submit</button>
        </div>
              </div>
      </div>
    </>
  );
}

export default Form;
