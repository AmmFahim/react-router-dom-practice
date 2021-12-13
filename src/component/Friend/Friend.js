import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const history = useNavigate();
    const handleFriendButton = (friendId) => {
        const friendUrl = `/friend/${friendId}`;
        history(friendUrl);

    }
    return (
        <div className = "friendBox">
            <h1>Name: {name}</h1>
            <h3>Email:{email}</h3>
            <p>ID:<Link to= {`/friend/${id}`}>Show details:{id}</Link></p>
            <button onClick={() => handleFriendButton(id)}>Show details of Friend:{id}</button>
        </div>
    );
};

export default Friend;