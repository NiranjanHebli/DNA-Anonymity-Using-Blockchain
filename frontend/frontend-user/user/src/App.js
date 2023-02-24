// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Form from "./Component/Form";
import Main from "./Component/Main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import imgbg from "./Assets/genedx-bioinformatics-web.jpg";
function App() {
  return (
<Router>
  
      <div className="App">

        <Routes>
          {/* /user --> Component-1
          /user/someComponet --> Component-2 */}
          <Route exact path="/" element={<Main/>}/>
          <Route path="/transaction" element={<Form/>}/>

        </Routes>
      </div>
      
</Router>
  );
}

export default App;
