import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  border-left: #847c6f outset 1px;
  border-right: #847c6f outset 1px;
  border-bottom: #847c6f outset 1px;
  background: #d1c4b0;
  display: flex;
  flex-direction: column;
  width: 13em;
  padding: 1.5em;
  padding-top: 4em;
  text-transform: uppercase;
  border-radius: 0 0 2em 2em;
  margin-left: 3em;
  position: sticky;
  box-shadow: -7px 7px 17px -7px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -7px 7px 17px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -7px 7px 17px -7px rgba(0, 0, 0, 1);
`;

export const LiFix = styled.li`
  padding: 0.2em;
`;

export const StyledLink = styled(NavLink)`
  color: #847c6f;
  text-decoration: none;
  &:hover,
  &.active {
    font-weight: 700;
    border-top: #847c6f solid 2px;
    border-bottom: #847c6f solid 2px;
  }
`;
