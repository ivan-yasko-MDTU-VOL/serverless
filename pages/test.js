import React from 'react';
import styles from '../styles/Home.module.css';

const UserProfile = ({user}) => {
  return (
    <div className={styles.container}>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default UserProfile;
