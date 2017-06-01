import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
    margin-left: auto;
    ${props => props.primary && `
        background: palevioletred;
        color: white;
    `}
`;

export default Button;