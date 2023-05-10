import React, { useState, useEffect } from "react";
import "./summary.css";
import { Navigate, useLocation } from "react-router-dom";

function Summary() {

  // this uselocation has used so that location of object at the moment could tracked
    const { state } = useLocation();

    // the movieId will have the current location of object which we are passing to ape site so that we can access that at moment
   const {movieID} = state;
   // we have setting the id after finding the object so we have declared first
   const [movieObj,setMovieObj]= useState(0);

   //this is for to use to set the response of api
  const [data, setData] = useState([]);

  // at time of clicking the button we will set true value and put some condition,if this condition pass then go to another page
  const [goToform, setGotoform] = useState(false);

  const url = `https://api.tvmaze.com/shows/` + movieID;

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    
  }, []);

  // this is when, we will click button then gotoform will be set to true
  if (goToform) {
    return <Navigate to="/form" state={{movieObj}} />;
  }

  return (
    <>
    <div className="main">

      <div className="picture">
       
        <img src={ data.image != null
                  ? data.image.original
                  : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png"} alt=""></img>
      </div>

<div className="summary">

      <button className="bookticket" onClick={() => {
        setMovieObj(data.id) 
        setGotoform(true)}}>
        Click Me for Booking Ticket
      </button>
     
        <div className="summary-card">
          <div className="showname">
            <h3>{data.name}</h3>
          </div>
          <div className="showsummary">
            <h4>Summary</h4>
            <p>{data.summary}</p>

          </div>
        </div>
        <div className="collection">
         
        </div>
</div>
    </div>
     
    </>
  );
}

export default Summary;
