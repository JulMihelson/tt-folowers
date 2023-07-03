import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selector';
import css from './UserCard.module.css';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import dialogbubbles from '../../images/dialogbubbles.png';
import Logo from './Logo';

export const UserCard = ({ avatar, id, name, tweets }) => {
  console.log(avatar);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(() => {
    const savedFollowers = localStorage.getItem('followers');
    return savedFollowers ? parseInt(savedFollowers, 10) : 100500;
  });

  useEffect(() => {
    localStorage.setItem('followers', followers.toString());
  }, [followers]);

  const handleFollow = () => {
    if (following) {
      setFollowers(prevFollowers => prevFollowers - 1);
    } else {
      setFollowers(prevFollowers => prevFollowers + 1);
    }
    setFollowing(prevFollowing => !prevFollowing);
  };

  return (
    <>
      <li className={css.userCard}>
        <Logo />
        <img src={dialogbubbles} className={css.bubbles} alt="f" />
        <img src={avatar} alt={name} />
        <p> {tweets} tweets</p>
        <p>{followers} followers</p>
        <button className={css.followBtn} onClick={handleFollow} type="button">
          {following ? 'Following' : 'Follow'}
        </button>
      </li>
    </>
  );
};
