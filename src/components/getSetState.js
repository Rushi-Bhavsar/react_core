import React, {useState} from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {

    function convertUpperCase() {
        console.log(text)
        setText(text.toUpperCase())
    }

    const [text, setText] = useState(props.initialMessage)

    return (
       <div className={'container'}>
           <div className="mb-3">
               <h2>{props.heading}</h2>
               <textarea className="form-control" value={text} onChange={(event) => {setText(event.target.value)}}
                         id="mybox" rows="10"></textarea>
           </div>
           <button className="btn btn-primary" onClick={convertUpperCase}>UpperText</button>
       </div>
    );
};
export default TextForm;

TextForm.propTypes = {
    heading : PropTypes.string,
    initialMessage: PropTypes.string,
    last_name: PropTypes.string,
}