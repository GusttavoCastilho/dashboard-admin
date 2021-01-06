import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavMenuContainer = styled.div`
   position: absolute;
   width: 255px;
   height: 100vh;
   left: 0px;
   top: 0px;
   background-color: #363740;

   display: flex;
   flex-direction: column;

   @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 10vh;
    }
`;

export const NavMenuLogo = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 200px;
        height: 200px;
        position: absolute;

        @media screen and (max-width: 768px) {
            width: 160px;
            height: 160px;
        }
    }
`;

export const NavSideBarWrapper = styled.div`
    position: relative;
    width: 255px;
    height: 56px;
    left: 0px;
    top: 10px;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavSideBarLink = styled(Link)`
    font-size: 20px;
    font-weight: 400;
    color: #A4A6B3;

    text-decoration: none;
    position: absolute;
    left: 72px;
    right: 24px;
    top: calc(50% - 20px/2); 
`;

export const Icon = styled.div `
    position: absolute;
    width: 16px;
    height: 16px;
    left: 32px;
    top: calc(50% - 16px/2);

    display: flex;

`;

export const Divider = styled.hr`
    position: absolute;
    height: 0px;
    left: 0px;
    right: 0px;
    top: calc(50% - 0px/2);


    border: 1px solid #DFE0EB;
    opacity: 0.06;
`;

export const NavMenuTextDiv = styled.div`
    position: absolute;
    width: 100%;
    bottom: 10px;
    right: 10px;
    color: #A4A6B3;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 18px;
        cursor: pointer;
        color: #fff;
    }
`;