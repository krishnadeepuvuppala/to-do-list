import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {

    let [editInput, updateInput] = useState("");

    const inputChangeHandler = (event) => {
        updateInput(event.target.value);
    };

    const actionHandler = (event) => {
        props.modalActions({
            type: (event.target.innerHTML).toLowerCase(),
            updateText: editInput
        })
        updateInput("");
    }


    return (<div style={{ display: (props.enable ? "block" : "none") }} className="modal">
        <div className="modal-content">
            {/* <span className="close">&times;</span> */}
            <p>Some text in the Modal..</p>
            <input type="text" value={editInput} onChange={inputChangeHandler} />
            <div> <button onClick={actionHandler} style={{ float: "right" }}>Submit</button>
                <button onClick={actionHandler} style={{ float: "left" }}>Cancel</button></div>
        </div>
    </div>)
};

export default Modal;

