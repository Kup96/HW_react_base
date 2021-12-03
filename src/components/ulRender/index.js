import React from 'react';
import styles from './index.module.css';

function UlRender(props){
    const {u} = props;
        return(
            <li>
                <div className={styles.name}>
                    <div className={styles.title}>{u.name.title}</div>
                    <h3>{u.name.first}</h3>
                    <h3>{u.name.surname}</h3>
                </div>
                <div className={styles.info}>
                    <div>{u.email}</div>
                    <div>{u.login.username}</div>
                </div>
            </li>
        )};
export default UlRender;

