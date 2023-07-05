import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreUsers } from 'redux/operations';
import { UserCard } from 'pages/UserCard/UserCard';
import css from './Tweets.module.css';
import { selectUsers, selectError } from 'redux/selector';
// import { Home } from 'pages/Home/Home';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleLoadMore = () => {
    dispatch(fetchMoreUsers());
  };

  const StyledLink = styled(NavLink)`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    align-items: center;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    color:#5736a3 :hover:focus {
      color: orange;
    }
  `;
  return (
    <>
      <StyledLink to="/">
        <div>back</div>
      </StyledLink>

      <div className={css.list}>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <ul>
              {users.map((user, index) => (
                <UserCard key={index} {...user} />
              ))}
            </ul>
            <button className={css.loadMore} onClick={handleLoadMore}>
              Load More
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Tweets;
