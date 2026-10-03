import React, {useState} from 'react'

export default function TextForm(props) {

   
    const HanddleUpperCase = () => {
      setText(text.toUpperCase())
    // setText("You have clicked on HanddleUpperCase");
      console.log("Button clicked!");
    } 

    const HanddleLowerCase = () =>{
    setText(text.toLowerCase())
}

const HanddleClearCase = () =>{
    setText("")
}


    const HanddleOnChange=(event)=>{
        console.log("on Chnge");
        setText(event.target.value);
    }

const [text, setText] = useState('');

  return (
<>
<form>
<div className="container">
     <h1>{props.heading}</h1>
  <div className="my-3">
     <label htmlFor="MyBox" className= "form-label">Comments</label>
     <textarea className="form-control" onChange={HanddleOnChange} value={text}  placeholder="Leave a comment here" rows="7" id="MyBox"></textarea>
    <button type="button" className="btn btn-primary my-3"  onClick={HanddleUpperCase}>Upper Case</button>
    <button type= "button" className="btn btn-primary my-3 mx-3" onClick={HanddleLowerCase}>Lower Case</button>
    <button type= "button" className="btn btn-danger my-3 mx-2" onClick={HanddleClearCase}>All Clear</button>
 </div>
</div>
<div className="container my-2">
 <h4>your text summary </h4>
<p>{text.split(" ").filter((word) => word.length > 0).length} words {text.length} chracters</p>
<p>{0.008 * text.split(" ").filter((word) => word.length > 0).length} minutes to read</p>

<h3>Preview</h3>
<p>{text}</p>


</div>
</form>
</>
)
}
