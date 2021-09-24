import {Link} from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    color: #1DB954;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    font-weight: bold;
`;
export const StyledNav = styled.nav`
    float:top;
    text-decoration:none;
    color: 5c0059; 
    font-size:20px; 
    padding: 5px 0px; 
    display:inline-block; 
    transition: all 0.5s ease 0s;
`;

export const StyledTable = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    table-layout: fixed;
    width: 80%;
`;

export const StyledTableHeader = styled.thead`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  color: black;
  background: #719a9b;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

export const StyledTableCell = styled.td`
  border: 1px solid #dddddd;

  text-align:
      ${prop => prop.align? prop.align: "left"};
  padding: 8px;
  font-size: 15px;
  table-layout: fixed;
`;  

export const StyledTableRow = styled.tr`
    background-color: ${prop => prop.row % 2 ? '#dae8e6' : '#ffffff'};
`;
