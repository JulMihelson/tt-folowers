import React, { useEffect } from 'react';

import UserList from 'pages/UserList/UserList';
import { fetchUsers } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UserList />;
};
