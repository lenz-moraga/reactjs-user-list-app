import React from "react";
import Card from "../UI/Card";

import "./_UsersList.scss";

const UsersList = props => {

    const renderUsers = () => {
        return ( 
            props.users.map( user => {
                return (
                    <li key={user.name}> {user.name} ({user.age} years old)</li>
                );
            })
        );
    }

    return (
        <Card className="users">
            <ul>
                {renderUsers()}
            </ul>
        </Card>
    );
}

export default UsersList;