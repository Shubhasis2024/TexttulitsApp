import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import Text from './Componenets/Text';
import About from './Componenets/About';
import Number_from_text from './Componenets/Number_from_text';
import React ,{ useState } from 'react';

function App() {
  const [mode, setmode] = useState('light')
  const removeclass=()=>{
document.body.classList.remove("bg-light")
// document.body.classList.remove("bg-Dark")
document.body.classList.remove("bg-primary")
document.body.classList.remove("bg-danger")
document.body.classList.remove("bg-success")
document.body.classList.remove("bg-warning")
}
  const tooglemode=(cls)=>{
    removeclass()
    document.body.classList.add('bg-'+cls)
if(mode==='light'){
  setmode('dark')
   document.body.style.backgroundColor="#04045e";
 
  }

else
{
  setmode('light')
  document.body.style.backgroundColor="white";
  
}
}

return (
    <>
   
<Navbar Home="MyHome" Link="About" Dropdown="Services"Disabled="ContactUS"
mode={mode}  tooglemode={tooglemode}  ></Navbar>
<div>
  <div class="container my-4">
  <Text Haeding="Enter Text to Analyze Below" mode={mode} ></Text>
  </div>
 </div>

 {/* <About></About> */}
 {/* <Number_from_text></Number_from_text> */}
  </>

  );
}

export default App;
