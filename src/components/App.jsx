import React, { useEffect } from 'react';
import Tweets from 'pages/Tweets/Tweets';
import { fetchUsers } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
    </Routes>
  );
};
