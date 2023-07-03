import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { UserCard } from 'pages/UserCard/UserCard';
import css from './UserList.module.css';
export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);
  const isLoading = useSelector(state => state.users.isLoading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <UserCard key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
