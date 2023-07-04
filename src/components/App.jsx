import React, { useEffect } from 'react';

// import css from './App.module.css';
import UserList from 'pages/UserList/UserList';
import { fetchUsers } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/selector';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return users.length !== 0 && <UserList />;
};
