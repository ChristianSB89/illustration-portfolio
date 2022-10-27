import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  border-left: var(--color-bg) inset 1px;
  border-right: var(--color-bg) inset 1px;
  border-bottom: var(--color-bg) inset 1px;
  background: var(--color-bg-variant);
  display: flex;
  flex-direction: column;
  width: 13em;
  padding: 1.5em;
  text-transform: uppercase;
  border-radius: 0 0 2em 2em;
  margin-left: 3em;
  position: sticky;
  box-shadow: -7px 7px 17px -7px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -7px 7px 17px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -7px 7px 17px -7px rgba(0, 0, 0, 1);
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
