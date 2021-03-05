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

    button {
        cursor: pointer; 
        background-color:black;
        color:white;
        border:solid;
        font-family: Consolas, Courier New;
        font-size: large;
        padding: 2% 5%;
        visibility: ${({started, ended}) => started && !ended ? 'hidden': 'visible'}
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
    .typewriter {
        overflow: hidden;
        margin: 0 auto;
        white-space: nowrap;
        animation: ${({started,ended}) => started && !ended ? 'typing 3.5s steps(40, end)' : null},
        blink-caret ${({started,ended}) => started && !ended ? '.75s step-end infinite' : null};
    }

    @keyframes typing {

        from { width: 0 }
        to { width: 100% }
      }
      
      @keyframes blink-caret {
        from, to { border-color: transparent }
      }
`
export default StyledBrian;