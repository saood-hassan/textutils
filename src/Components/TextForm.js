import React, {useState} from 'react';

function TextForm(props) {
    const [textVal, settextVal] = useState('');
    const handleUpClicked = () =>{
        // console.log("Upper Clicked");
        const newText = textVal.toUpperCase();
        settextVal(newText)
        props.showAlert("Converted to UpperCase.", "success")
    }
    const handleLowClicked = () =>{
        // console.log("Upper Clicked");
        const newText = textVal.toLowerCase();
        settextVal(newText)
        props.showAlert("Converted to LowerCase.", "success")
    }
    const handleClearClicked = () =>{
        settextVal('');
        props.showAlert("Text has been cleared.", "success")
    }
    const handleOnChange = (event) =>{
        settextVal(event.target.value)
    }
    const handleCopy = () => {
        const copyText = document.getElementById('exampleFormControlTextarea1');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text has been copied.", "success")

    }
    const handleExtraSpaces = () =>{
        let textinword = textVal.split(/[ ]+/);
        settextVal (textinword.join(" "));
        props.showAlert("Extra Spaces has been removed.", "success")
    }
    return (
        <div>
            <div className="container" style={{backgroundColor: props.mode==='light'?'white':'#1e2061'}}>
                <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
                    <h1 className = "mt-3">{props.heading}</h1>
                    <textarea className="form-control" value = {textVal} id="exampleFormControlTextarea1" rows="8" onChange = {handleOnChange} style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'rgb(64 66 130)'}} />
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick = {handleUpClicked}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick = {handleLowClicked}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick = {handleClearClicked}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
                <div className = "container mt-3" style={{color: props.mode==='light'?'black':'white'}} >
                    <h2>Your text summary</h2>
                    <p>{textVal.split(" ").length} Words and {textVal.length} Characters</p>
                    <p>{0.008 * textVal.split(" ").length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{textVal.length>0?textVal:''}</p>
                </div>
            </div>
        </div>
    )
}

export default TextForm
