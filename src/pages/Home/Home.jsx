import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  align-items: center;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  color:#5736a3 :hover:focus {
    color: orange;
  }
`;

export const Home = () => {
  return (
    <StyledLink to="/tweets">
      <div>Who likes GoIT? Check our community and find new friends</div>
    </StyledLink>
  );
};
