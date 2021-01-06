import React, { useState } from 'react';

import SidebarMenu from '../components/SidebarMenu';
import NavbarMenu from '../components/NavbarMenu';
import NavInfo from '../components/NavInfo';

export default function Index() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <SidebarMenu toggle={toggle} />
        <NavbarMenu isOpen={isOpen} toggle={toggle} />
        <NavInfo />
        </>
    )
}