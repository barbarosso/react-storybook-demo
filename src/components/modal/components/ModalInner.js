import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const ModalInner = styled.div`
    animation: ${fadeIn} 0.3s linear;
    box-sizing:border-box;
    margin:auto;
    padding:30px 0;
    position:relative;
    min-width:320px;
    width:60%;
    backgroundColor: 'red'
`;

export default ModalInner;