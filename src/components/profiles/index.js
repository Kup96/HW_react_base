import React from 'react';
import { useState, useEffect } from 'react';
import UlRender from '../ulRender/index.js';
import styles from './profiles.module.css';



function ProfilesShow(){
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        fetch(`https://randomuser.me/api/?inc=name,login,email&results=10`)
          .then((response) => response.json())
          .then(({ results }) => setUsers(results))
          .then(() => setIsFetching(true))
          .catch((err) => setIsError(true));
      }, [currentPage]);


    console.log(users);
    console.log(isFetching);

    const prev = (e) => {
        e.preventDefault()
        if (currentPage > 0){
            setCurrentPage(currentPage-1);
        }
        else{
            alert('Enough pages!')
        }
    }

    const next = (e) => {
        e.preventDefault()
        setCurrentPage(currentPage+1);
    }


    const mapUsers = (u) => {
        return <UlRender key={u.login.uuid} u={u} />
    }

    if (isFetching) {
        return (
            <>
        
                <h1>Users</h1>
                <ul>{users.map(mapUsers)}</ul>
                <ul></ul>
                <div className={styles.navigation}>
                    <button onClick={prev}>Prev</button>  
                    <h2>{currentPage}</h2>  
                    <button onClick={next}>Next</button>
                </div>
            </>
            )}
            else {
                return(
                    <div className={styles.error}>Error. Waiting....  status of error ({isError}) yet</div>
                )}
        };


export default ProfilesShow;


//<UlRender users={users}/>
