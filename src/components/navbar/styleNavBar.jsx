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
  position: relative;
  &::before {
    content: "";
    border: 2px solid #353535;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
    border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
`;

export const SectionPadding = styled.section`
  padding-bottom: 1em;
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
