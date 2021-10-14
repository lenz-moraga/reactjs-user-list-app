import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import "./_AddUser.scss";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {    
    const [error, setError] = useState();

    /* there is an option to get the value of the inputs, instead of using states, we can use the react hook useRef, which get the properties of the rendered HTML element from the DOM, instead of declaring the variables and assign the value in each onChange event, we can just get the value from the input and assign it directly */
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');

    // const usernameChangeHandler = ( {target:{value}} ) => setEnteredUsername(value);
    // const ageChangeHandler = ( {target:{value}} ) => setEnteredAge(value);

    const enteredUsername = useRef();
    const enteredAge = useRef();

    const addUserHandler = (evt) => {
        evt.preventDefault();

        const enteredUName = enteredUsername.current.value;
        const enteredUAge = enteredAge.current.value;
        
        if ( enteredUName.trim().length === 0 || enteredUAge.trim().length === 0 ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if ( +enteredUAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (age > 0).'
            });
            return;
        }

        props.onAddUser(enteredUName, enteredUAge);

        /* In this specific case, to reset the value of the inputs, we can reset the value of them by changing the DOM, this is not recommended, but is possible, and it is permitted for this kind of exercises  */

        enteredUsername.current.value = '';
        enteredAge.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');

        /* The use of Refs, in this case, is recommended because it reads and gets the values of the DOM Elements, you can read and pass them, but it is not recommended to manipulate them neither their values. There are many more uses for this hook, but we will learn about them later. */

        /* The use of Refs introduces us to the controlled and uncontrolled components, the uncontrolled components refer to the Elements which we don't manipulate their states and use their default behavior to work with them. */
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" 
                    // onChange={usernameChangeHandler} 
                    ref={enteredUsername}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" 
                    // onChange={ageChangeHandler} 
                    ref={enteredAge} step='1'/>
                    <Button type="submit">
                        Add User
                    </Button>
                </form>
            </Card>   
        </Wrapper>      
    );
}

export default AddUser;