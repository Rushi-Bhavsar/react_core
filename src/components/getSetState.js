import React, {useState} from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {

    let textWords;

    const [text, setText] = useState(props.initialMessage)
    const textLength = text.length
    if (text){
        textWords = text.split(" ").length;
    }
    else{
        textWords = 0
    }

    return (
       <>
           <div className={'container'}>
               <div className="mb-3">
                   <h2>{props.heading}</h2>
                   <textarea className="form-control" value={text} onChange={(event) => {setText(event.target.value)}}
                             id="mybox" rows="10"></textarea>
               </div>`
               <button className="btn btn-primary" onClick={() => {setText(text.toUpperCase())}}>UpperText</button>
               <button className="btn btn-primary mx-1" onClick={() => {setText(text.toLowerCase())}}>LowerText</button>
           </div>
           <div className="container my-4">
               <h2>Text Summary</h2>
               <p>{textWords} words and {textLength} characters</p>
               <p>{textWords * 0.008} Min are required to read.</p>
               <h2>Text Preview</h2>
               <p>{text}</p>
           </div>
       </>
    );
};
export default TextForm;

TextForm.propTypes = {
    heading : PropTypes.string,
    initialMessage: PropTypes.string,
    last_name: PropTypes.string,
}