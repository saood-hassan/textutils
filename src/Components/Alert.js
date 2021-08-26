import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        let newtext = word.toLowerCase()
        return newtext.charAt(0).toUpperCase() + newtext.slice(1);
    }
    return (
        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
