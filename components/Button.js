import React from 'react';
import {StyledButton} from '../styles/Button.styled.js';

export default function Button({text, color, foregroundColor='black', link = ''}) {
    function onClick () {
        window.open(link);
    }
    return (
        <StyledButton color={color} foregroundColor={foregroundColor} onClick={onClick}>
            {text}
        </StyledButton>
    );
}

