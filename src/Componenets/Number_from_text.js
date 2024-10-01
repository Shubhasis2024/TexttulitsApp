import React,{ useState }from 'react'

export default function Number_from_text() {
    
        const [inputText, setInputText] = useState('');
        const [numbers, setNumbers] = useState([]);
    
        const extractNumbers = (inputText) => {
          // Use regex to match all numbers in the string
          const extractedNumbers = inputText.match(/\d+/g) || [];
          setNumbers(extractedNumbers);
        };
    
      
        const handleChange = (e) => {
          const text = e.target.value;
          setInputText(inputText);
          extractNumbers(inputText);
        };
  return (
  
      <>
      <div classname="mb-3">
        <h1>Numeric Analyzier</h1>

        <div class="mb-3">
          <textarea
            class="form-control"
            id="Myboxarea"
            value={inputText}
            onChange={ handleChange}
            rows="6"
          ></textarea>
        </div>
        <div>
           
          <button type="button" class="btn btn-info mx-3" onClick={extractNumbers}>  {" "}Click For Points</button>
         </div>
      </div>
      <div classname="my-3">

      <h3>Text Points</h3>
        </div>
            
  </>
  );
}
