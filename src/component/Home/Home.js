import React from 'react';
import Friend from '../Friend/Friend';
import { useEffect, useState } from 'react';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
      // let url = 'https://jsonplaceholder.typicode.com/users';
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data => setFriends(data))
    },[])
    return (
        <div>
                    
            {
                friends.map(frnd =><Friend friend = {frnd}></Friend>)
            }
        
        </div>
    );
};

export default Home;