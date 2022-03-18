import React, { useEffect, useState } from 'react';

const RecommendedRoom = () => {
    const [users, setUsers] = useState([]);
    const [room, setRoom] = useState({});

    useEffect(() => {
        // setLoading(true);
        const blogUrl = `https://aqueous-chamber-45567.herokuapp.com/users`;
        fetch(blogUrl)
          .then((response) => response.json())
          .then((data) => {
            // setLoading(false);
            setUsers(data);
          });
      }, []);
      users.map(user => setRoom(user));


    return (
        <>
            
        </>
    );
};

export default RecommendedRoom;