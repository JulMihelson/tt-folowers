import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  .title {
    margin-bottom: 20px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  }
  .button {
    text-transform: uppercase;
    font-family: inherit;
    padding: 14px 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebd8ff;
    border-radius: 10.3108px;
    border: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 21.94px;
    color: #373737;
    width: 196px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #5cd3a8;
    font-family: inherit;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
  .container {
    padding: 15px;
    color: rgba(235, 216, 255, 1);
    font-family: inherit;
    font-size: 20px;
    width: 380px;
    height: 460px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
  }
`;

export const Home = () => {
  return (
    <StyledLink to="/tweets">
      <div className="container">
        <div className="title">
          Who likes GoIT? Check our community and find new friends
        </div>
        <button className="button" type="button">
          check
        </button>
      </div>
    </StyledLink>
  );
};
