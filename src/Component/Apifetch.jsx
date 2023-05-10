import React, { useEffect, useState } from "react";
import "./Apifetch.css";
import images1 from './thesocial.jpg'
import { Navigate } from "react-router-dom";

function Apifetch() {
  const [data, setData] = useState([]);
  const [goToSummary, setGotoSummary] = useState(false);
  
  // this line is for to pass as props so that we could find the summary of a particular page after clicking the button
  const [movieID, setMovieID] = useState(0)

  //this is for the fetching the data from api
  const url = `https://api.tvmaze.com/search/shows?q=all`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // this is for to navigate the page to summary of particular show

  if (goToSummary) {
  
    // here we have passed the props
    return <Navigate to="/summary" state={{movieID}}/>;
  }

  return (
    <>

<ul className="nav justify-content-end">
   <img src={images1}></img>
 <h1>Tv Shows</h1>
  
</ul>




      <div className="Show">
        {data.map((dataObj, i) => (
          <div class="card">
            <a href={dataObj.show.url}> <img
              src={
                dataObj.show.image != null
                  ? dataObj.show.image.original
                  : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png"
              }
              class="card-img-top"
              alt="..."
            /></a>
            <div class="card-body">
              <div className="showdetail">
                <p class="card-text">Premiered: {dataObj.show.premiered} </p>
                <p class="card-text">
                  Genere: {dataObj.show.genres.map((genre, index) => genre)}{" "}
                </p>
                <h5 class="card-title">Show Name:{dataObj.show.name}</h5>
                <p class="card-text"> Language: {dataObj.show.language}</p>

               
              </div>
              <button
                className="Button"
                onClick={() => {
                  // we have set the movieObj so that we could know the summary of particular show
                    setMovieID(dataObj.show.id)
                    
                  setGotoSummary(true);
                }}
              >
                Click Me for Summary
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Apifetch;
