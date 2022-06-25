import React, { useEffect, useState } from 'react'
import Nav from './../components/Nav';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { deleteUser } from './../redux/actions/deleteUser';

function Accueil() {
   
    const users = useSelector(state => state.userReducer.users)
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    useEffect(() => {
        console.log(state)
    }, [state]);
  return (
    <div>
        <h1>Le composant Accueil</h1>
        {console.log(users)}
        <Nav/>
        <ul>{users.map(user => {
            return (
                   <li key={user.id}><Link to={`/user/${user.id}`}>{user.name} </Link> <button onClick={() => handleDelete(user.id)}>Supprimer</button></li>
            )
        })}
        </ul>
    </div>
  )
}

export default Accueil