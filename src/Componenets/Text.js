import React, { useState } from "react";

export default function Text(props) {
  const [text, settext] = useState("EnterText");
  const Uppercasfun = () => {             // For uppercase function
    let newtext = text.toUpperCase();
    settext(newtext);
  };
   const lowercasfun=()=>{                   // For lower case Function
    let newtext = text.toLocaleLowerCase();
    settext(newtext);
   }
   const RemoveSpace=()=>{
    let newtext=text.split(/[ ]+/);
    settext(newtext.join(" "))
   }
   

  const Valuechange = (event) => {
    settext(event.target.value);
  };
  return (
    <>
      <div classname="mb-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.Haeding}</h1>

        <div class="mb-3">
          <textarea
            class="form-control"
            style={{backgroundcolor:props.mode==='dark'?'grey':'white'}}
            id="Myboxarea"
            value={text}
            onChange={Valuechange }
            
            rows="6"
          ></textarea>
        </div>
        <div>
           <button disabled={text.length===0}type="button" class="btn btn-info mx-3 my-2" onClick={Uppercasfun}>  {" "}Click For Uppercase</button>
          <button disabled={text.length===0} type="button" class="btn btn-info mx-3 my-2" onClick={lowercasfun}>  {" "}Click For Lowercase</button>
          <button disabled={text.length===0}type="button" class="btn btn-info mx-3 my-2" onClick={RemoveSpace}>  {" "}Click For RemoveSpace</button>
         
         </div>
      </div>
      <div classname="my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary is </h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !=0}).length} words and {text.length}chracters </p>
        <p>{0.008*text.split("").filter((element)=>{return element.length !=0}).length} Reading time</p>
        <h3>Privew</h3>
        <p>{text}</p>
        
        
      </div>
    </>
  );
}
