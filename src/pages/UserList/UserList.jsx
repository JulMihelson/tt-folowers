import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { UserCard } from 'pages/UserCard/UserCard';
import css from './UserList.module.css';
import { selectUsers, selectIsLoading, selectError } from 'redux/selector';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchUsers());
  };

  return isLoading ? (
    <div className={css.list}>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  ) : (
    <p>Error: {error}</p>
  );
};

export default UserList;
