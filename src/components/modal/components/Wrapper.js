import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    background: rgba(${props => props.rgba});
    bottom: 0;
    display:${props => props.display};
    outline:0;
    overflow-x: hidden;
    overflow-y:auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    -webkit-overflow-scrolling: touch;
`;

export default Wrapper;