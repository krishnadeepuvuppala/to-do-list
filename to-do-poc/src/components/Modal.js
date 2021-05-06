import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {

    let [editInput, updateInput] = useState("");
    let [editDesc, updateEditDesc] = useState("");

    const inputChangeHandler = (event) => {
        updateInput(event.target.value);
    };
    const descChangeHandler = (event) => {
        updateEditDesc(event.target.value);
    };

    const actionHandler = (event) => {
        props.modalActions({
            type: (event.target.innerHTML).toLowerCase(),
            updateText: editInput,
            desc: editDesc
        })
        updateInput("");
        updateEditDesc("");
    }


    return (<div style={{ display: (props.enable ? "block" : "none") }} className="modal">
        <div className="modal-content">
            {/* <span className="close">&times;</span> */}
            <p>Some text in the Modal..</p>
            <div>
                <label>Title</label>
                <input type="text" value={editInput} onChange={inputChangeHandler} />

            </div>
            <div>
                <label>Description</label>
                <textarea type="text" value={editDesc} onChange={descChangeHandler} />
            </div>
            <div> <button onClick={actionHandler} style={{ float: "right" }}>Submit</button>
                <button onClick={actionHandler} style={{ float: "left" }}>Cancel</button></div>
        </div>
    </div>)
};

export default Modal;

