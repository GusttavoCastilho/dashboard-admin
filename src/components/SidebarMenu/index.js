import React from 'react';

import Logo from '../../assets/icons/logo.svg';
import Overview from '../../assets/icons/overview.svg';
import Tickets from '../../assets/icons/ticket.svg';
import Ideas from '../../assets/icons/ideas.svg';
import Contacts from '../../assets/icons/contacts.svg';
import Agents from '../../assets/icons/agents.svg';
import Articles from '../../assets/icons/articles.svg';
import Settings from '../../assets/icons/settings.svg';
import Subscription from '../../assets/icons/subscription.svg';
import { FaBars } from 'react-icons/fa';

import {
    NavMenuContainer,
    NavMenuLogo,
    NavSideBarLink,
    NavSideBarWrapper,
    Icon,
    Divider,
    NavMenuTextDiv,
    MobileIcon
} from './styles';

function NavMenu({ toggle }) {
    return (
        <NavMenuContainer>
            <NavMenuLogo>
                <img src={Logo} />
            </NavMenuLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <NavSideBarWrapper>
                <Icon><img src={Overview} /></Icon>
                <NavSideBarLink to="/">
                    Overview
                    </NavSideBarLink>
            </NavSideBarWrapper>
            <NavSideBarWrapper>
                <Icon><img src={Tickets} /></Icon>
                <NavSideBarLink to="/">
                    Tickets
                    </NavSideBarLink>
            </NavSideBarWrapper>
            <NavSideBarWrapper>
                <Icon><img src={Ideas} /></Icon>
                <NavSideBarLink to="/">
                    Ideas
                    </NavSideBarLink>
            </NavSideBarWrapper>
            <NavSideBarWrapper>
                <Icon><img src={Contacts} /></Icon>
                <NavSideBarLink to="/">
                    Contacts
                    </NavSideBarLink>
            </NavSideBarWrapper>
            <NavSideBarWrapper>
                <Divider />
            </NavSideBarWrapper>
            <NavSideBarWrapper>
                <Icon><img src={Settings} /></Icon>
                <NavSideBarLink to="/">
                    Settings
                    </NavSideBarLink>
            </NavSideBarWrapper>
            <NavSideBarWrapper>
                <Icon><img src={Subscription} /></Icon>
                <NavSideBarLink to="/">
                    Subscription
                    </NavSideBarLink>
            </NavSideBarWrapper>
            <NavSideBarWrapper>
                <Divider />
            </NavSideBarWrapper>
            <NavMenuTextDiv>® 2020 Dashboard Admin</NavMenuTextDiv>
        </NavMenuContainer>
    )
}

export default NavMenu;
