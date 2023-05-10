

import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Apifetch from "./Component/Apifetch";
import Summary from "./Component/Summary";
import Form from "./Component/Form";


function App() {
  return (
   
  <>
  
       <Router>
        <Routes>
          <Route path="/" element={<Apifetch/>}/>
          <Route path="/summary" element={<Summary/>}/>
          <Route path="/form" element={<Form/>}/>
          

        </Routes>
       </Router>
  </>
  );
}

export default App;
