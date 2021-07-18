import React, { useState } from "react";
import styled from "styled-components";
import { HiMoon } from "../../node_modules/react-icons/hi";
import { HiSun } from "../../node_modules/react-icons/hi";


const InnerDarkModeToggle = styled.div`
    position:absolute;
    right: 3%;
    top: 1%;
    z-index: 1000;
    @media(max-width: 860px) {
        display:none;
    }
`;

const Toggle = styled.button`
    cursor: pointer;
    display: block;   
    margin-right: 450px;
    margin-top: 70px;
    border: none;
    font-size: 0.5em;
    background-color: transparent;
    color: ${props => props.theme.icon};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
    svg{
        width: 30px;
        height: 30px;
    }
`;

export default function DarkModeToggle(props) {
    
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    const icon = props.theme === "light" ? <HiMoon size={30} /> : <HiSun size={30} />;
   return (
    <InnerDarkModeToggle>
        <Toggle onClick={changeTheme}>
            {icon}
        </Toggle>
    </InnerDarkModeToggle>
   ) 
}