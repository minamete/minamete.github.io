import {StyledNavBar} from '../styles/NavBar.styled.js';

export default function NavBar({open}) {
    return (
        <StyledNavBar open={open}>
            <a href="/">
                Home
            </a>
            <a href="/about">
                About Me
            </a>
            <a href="/codingclub">
                AMHS Coding Club
            </a>
            <a href="/sideprojects">
                Side Projects
            </a>
            <a href="/contactinfo">
                Contact Info
            </a>
            
        </StyledNavBar>
    )
}
