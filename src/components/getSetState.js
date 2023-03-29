import React, {useState} from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {

    let textWords, splitList;

    const [text, setText] = useState(props.initialMessage)
    const textLength = text.length
    splitList = text.split(" ")
    if (splitList.includes("")){
        textWords = splitList.length - 1;
    }
    else{
        textWords = splitList.length
    }
    const containerStyle = {
        color: props.mode === 'light' ? 'black' : 'white'
    }
    const textBoxStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : '#646b81',
        color: props.mode === 'light' ? 'black' : 'white'
    }
    return (
       <>
           <div className={'container'} style={containerStyle}>
               <div className="mb-3">
                   <h2>{props.heading}</h2>
                   <textarea className="form-control" value={text} onChange={(event) => {setText(event.target.value)}}
                             id="mybox" rows="10" style={textBoxStyle}></textarea>
               </div>
               <button className="btn btn-primary" onClick={() => {setText(text.toUpperCase());
                   props.showAlert('Upper case conversion done.', 'success')}}>UpperText</button>
               <button className="btn btn-primary mx-1" onClick={() => {setText(text.toLowerCase());
                   props.showAlert('Lower case conversion done.', 'success')}}>LowerText</button>
           </div>
           <div className="container my-4" style={containerStyle}>
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