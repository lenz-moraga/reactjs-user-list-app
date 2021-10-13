import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import "./_AddUser.scss";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = ( {target:{value}} ) => setEnteredUsername(value);
    const ageChangeHandler = ( {target:{value}} ) => setEnteredAge(value);

    const addUserHandler = (evt) => {
        evt.preventDefault();
        
        if ( enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if ( +enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (age > 0).'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
            <Card className="input">
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
                        <label htmlFor="age">Age (Years)</label>
                        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} step='1'/>
                        <Button type="submit">
                            Add User
                        </Button>
                    </form>
                </Card>   
        </>      
    );
}

export default AddUser;