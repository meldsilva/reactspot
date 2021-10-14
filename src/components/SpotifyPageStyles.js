import '../components/SpotifyPages.css';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    color: #1DB954;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    font-weight: bold;
`;

export const StyledNav = styled.nav`
    float:top;
    text-decoration:none;
    // color: 5c0059; 
    font-size:20px; 
    padding: 5px 0px; 
    display:inline-block; 
    transition: all 0.5s ease 0s;
`;
