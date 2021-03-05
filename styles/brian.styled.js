import styled from 'styled-components';
const StyledBrian = styled.section`
    background-color: black;
    min-height: 100vh;
    min-width: 100vw;
    transition: background-color 5s ease;
    color:white;

    flex: 1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align: center;
    font-family: Consolas, Courier New;

    .back {
        top:0;
        left:0;
        position:absolute;
        border:none;
    }

    .back:active {
        background-color:black;
    }

    button {
        cursor: pointer; 
        background-color:black;
        color:white;
        border:solid;
        font-family: Consolas, Courier New;
        font-size: large;
        padding: 2% 5%;
        visibility: ${({started, ended}) => started && !ended ? 'hidden': 'visible'};
        opacity: ${({started, ended}) => started && !ended ? '0': '1'};
        transition:visibility 0.3s linear,opacity 0.3s linear;
    }
    button:hover {
        color: cadetblue;
    }
    button:active {
        background-color:darkslategray;
    }
    button:focus {
        box-shadow:none;
        outline: none;
    }

    h1 {
            padding: 2%;
    }
`   
export default StyledBrian;