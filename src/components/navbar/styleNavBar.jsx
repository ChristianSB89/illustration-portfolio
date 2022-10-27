import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  rotate: -1deg;
  padding: 4em 2em;
  display: inline-block;
  border: 3px solid #333333;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  background: #ffffff;
  position: absolute;
  top: 1;
  left: 1;
  box-shadow: 2px 3px 20px black, 0 0 60px #3b2d1f inset;
`;

export const SectionPadding = styled.section`
  padding-bottom: 1em;
`;

export const NameTag = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

export const LiFix = styled.li`
  padding: 0.2em;
`;

export const StyledLink = styled(NavLink)`
  color: var(--color-bg);
  text-decoration: none;
  &:hover,
  &.active {
    color: var(--color-font);
    font-weight: 700;
    border-top: var(--color-font) solid 2px;
    border-bottom: var(--color-font) solid 2px;
  }
`;
