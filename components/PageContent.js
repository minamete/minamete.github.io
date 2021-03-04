import React, {useState} from 'react';
import {StyledPageContent} from '../styles/PageContent.styled.js';

export default function PageContent({children, color, foregroundColor='black'}) {

    return (
        <StyledPageContent color={color} foregroundColor={foregroundColor}>
            {children}
        </StyledPageContent>
    )
}

