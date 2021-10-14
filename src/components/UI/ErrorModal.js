import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import './_ErrorModal.scss'

const Backdrop = props => {
    return (
        <div className="backdrop" onClick={props.onClick}></div>
    );
}

const ModalOverlay = props => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>
                    {props.message}
                </p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
}

// const 

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
}

export default ErrorModal;