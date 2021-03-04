import styled from 'styled-components';
export const StyledNavBar = styled.section`
    z-index: 3;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    height: 100%;
    text-align: left;
    transition: transform 0.3s ease-in-out;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    font-size: xx-large;
    top: 0;
    left: 0;
    flex: 1;
    position: fixed;


    a {    
        color: white;
        padding: 10%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 1%;
        margin-bottom: 1%;
        border-radius: 10%;
    }

    a:hover {
        color: lightblue;
    }

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`
