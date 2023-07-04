import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { UserCard } from 'pages/UserCard/UserCard';
import css from './UserList.module.css';
import { selectUsers } from 'redux/selector';

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={css.list}>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
