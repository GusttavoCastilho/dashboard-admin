import React from 'react'

import { NavbarContainer, Icon, CloseIcon, NavbarWrapper, NavbarMenu, NavbarLink } from './styles';

function NavBarMenu({ isOpen, toggle }) {
    return (
        <NavbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <NavbarWrapper>
                <NavbarMenu>
                    <NavbarLink to="/" onClick={toggle}>Overview</NavbarLink>
                    <NavbarLink to="/" onClick={toggle}>Tickets</NavbarLink>
                    <NavbarLink to="/" onClick={toggle}>Ideas</NavbarLink>
                    <NavbarLink to="/" onClick={toggle}>Contacts</NavbarLink>
                    <NavbarLink to="/" onClick={toggle}>Settings</NavbarLink>
                    <NavbarLink to="/" onClick={toggle}>Subscription</NavbarLink>
                </NavbarMenu>
            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default NavBarMenu;
