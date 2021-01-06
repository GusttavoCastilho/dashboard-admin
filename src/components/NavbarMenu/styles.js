import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const NavbarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #363740;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
     position: absolute;
    top: 12px;
    right: 15px;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    outline: none;
`;

export const NavbarWrapper = styled.div`
    color: #fff;
`;

export const NavbarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
      @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6, 60px);
      }
`;

export const NavbarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    :hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;