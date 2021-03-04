import styled from 'styled-components';
export const StyledPageContent = styled.section`

    display: flex;
    flex:1;

    flex-direction: column;
    justify-content: center;
    background-color: ${({ color }) => color};
    color: ${({foregroundColor}) => foregroundColor};

    height: 100%;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    font-size: xx-large;

    margin:0.5%;
    padding: 2%;
    
    p {
        font-weight: normal;
        font-size: medium;
    }
`

