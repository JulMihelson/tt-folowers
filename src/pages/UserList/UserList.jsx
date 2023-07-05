import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreUsers } from 'redux/operations';
import { UserCard } from 'pages/UserCard/UserCard';
import css from './UserList.module.css';
import { selectUsers, selectError } from 'redux/selector';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleLoadMore = () => {
    dispatch(fetchMoreUsers());
  };

  return (
    <div className={css.list}>
      <h1>User List</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul>
            {users.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </ul>
          <button onClick={handleLoadMore}>Load More</button>
        </>
      )}
    </div>
  );
};

export default UserList;
