import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 20px;

  :hover{
    text-decoration: underline;
  }

  &.active {
    color: orange;
  }
  `;
  
export default function Navigation(){
    return (
        <div>
            <nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
            </nav>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}