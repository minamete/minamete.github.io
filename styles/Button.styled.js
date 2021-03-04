import styled from 'styled-components';
export const StyledButton = styled.button`

font-size: medium;
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
background-color: ${({ color }) => color};
color: ${({foregroundColor}) => foregroundColor};
border-style: hidden;
padding: 3%;
margin: 0.5%;
flex: 1;
height: 100%;


:hover {
    filter: brightness(150%);
    cursor: pointer;
}`