import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))

    },[]);
    const {name, email} = friend;
    return (
            <div>
            <h2>This is Friend Details page of:{id}</h2>
            <h1>Name: {name}</h1>
            <h4>{email}</h4>
            </div>
    );
};

export default FriendDetails;