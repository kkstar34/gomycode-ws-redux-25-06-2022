import React from 'react';

import {useParams}  from 'react-router-dom';
import { useSelector } from 'react-redux';

function User() {

    let userId = parseInt(useParams().id);
    const users = useSelector(state => state.users);
    let user = users.find((user) => user.id === userId);
    return (
    <div>{user.name}</div>
  )
}

export default User