import React from 'react';
import imgbg from  "../Assets/genedx-bioinformatics-web.jpg";
import { useState } from 'react';
// import "./App.css";

export default function Form() {
    const handleOnChange1 = (event) => {
        // console.log("handleOnChange was Envoked");
        
        setText1(event.target.value);
      };
      const Show =()=>{
       console.log(text1);
       console.log(text2);
       console.log(text3);
       console.log(text4);
      }
      const handleOnChange2 = (event) => {
        // console.log("handleOnChange was Envoked");
        
        setText2(event.target.value);
      };
      const handleOnChange3 = (event) => {
        // console.log("handleOnChange was Envoked");
        
        setText3(event.target.value);
      };
      const handleOnChange4 = (event) => {
        // console.log("handleOnChange was Envoked");
        
        setText4(event.target.value);
      };
      const [text1, setText1] = useState("Enter text here");
      const [text2, setText2] = useState("Enter text here");
      const [text3, setText3] = useState("Enter text here");
      const [text4, setText4] = useState("Enter text here");
      
  return (
    <>
    <div className="App__Aside">
        <img src={imgbg} alt="" className="imgcontainer" />
      </div>
      <div className="App__Form">
          <h1>Enter Details of the Patient</h1>
          <div className="form-group">
<label htmlFor="Data">Data 1</label>
<input
type="text"
className="form-control mx-3 my-5"
id="Data"
onChange={handleOnChange1}
placeholder="Data"
/>
</div>
<div className="form-group">
<label htmlFor="Data2">Data 2</label>
<input
type="text"
className="form-control mx-3 my-5"
onChange={handleOnChange2}
id="Data2"
placeholder="Data"
/>
</div>
<div className="form-group">
<label htmlFor="Data3">Data 3</label>
<input
type="text"
className="form-control mx-3 my-5"
onChange={handleOnChange3}
id="Data2"
placeholder="Data"
/>
</div><div className="form-group">
<label htmlFor="Data4">Data 4</label>
<input
type="text"
className="form-control mx-3 my-5"
onChange={handleOnChange4}
id="Data2"
placeholder="Data"
/>
        </div>

        <div className="container margin-above:50px margin-bottom:50px">
          <button className="FormField__Button" onClick={Show}>Submit</button>
        </div>
</div>
</>
  )
};

