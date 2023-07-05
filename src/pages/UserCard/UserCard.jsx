import dialogbubbles from '../../images/dialogbubbles.png';
import Logo from './Logo';
import { useDispatch } from 'react-redux';
import { updateUsers } from 'redux/operations';
import css from './UserCard.module.css';
export const UserCard = ({ avatar, id, name, followers, tweets, isFollow }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    const newFollowers = isFollow ? followers - 1 : followers + 1;
    dispatch(updateUsers({ id, isFollow: !isFollow, followers: newFollowers }));
  };
  const formattedFollowers = followers.toLocaleString('en-US');
  return (
    <>
      <li className={css.userCard}>
        <Logo />
        <img src={dialogbubbles} className={css.bubbles} alt="speech-bubbles" />
        <div className={css.round}>
          <div className={css.line}></div>
          <img className={css.avatar} src={avatar} alt={name} />
        </div>

        <p className={css.tweets}>{tweets} tweets</p>
        <p className={css.followers}>{formattedFollowers} followers</p>

        {isFollow ? (
          <button
            type="button"
            className={css.buttonFollowing}
            onClick={handleFollow}
          >
            Following
          </button>
        ) : (
          <button
            type="button"
            className={css.followBtn}
            onClick={handleFollow}
          >
            Follow
          </button>
        )}
      </li>
    </>
  );
};
