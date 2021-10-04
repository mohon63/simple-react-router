import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {

    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    const handleClick = () => {
        history.push("/friends");
    }

    return (
        <div>
            <h3>Friend details of: {friendId}</h3>
            <h2>{friend.name}</h2>
            <h2>{friend.phone}</h2>
            <h2>{friend.website}</h2>
            <h2>Work at:{friend.company?.bs}</h2>
            <button onClick={handleClick}>See all Friend</button>
        </div>
    );
};

export default FriendDetail;