import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import convert from "color-convert";

import Wrapper from './components/Wrapper';
import ModalInner from './components/ModalInner';
import ModalContent from './components/ModalContent';
import Title from './components/ModalContent';
import Button from './components/Button';
import Body from './components/Body';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  cancelHandler() {
    this.setState({ visible: false });
    this.props.cancelHandler();
  }

  okHandler() {
    this.setState({ visible: false });
    this.props.okHandler();
  }

  render() {

    const {
      title,
      body,
      backgroundAlpha,
      backgroundColor,
      okHandler,
      cancelHandler
    } = this.props;
    
    const rgb = convert.hex.rgb(backgroundColor);
    const rgba = [...rgb, backgroundAlpha].join() || "rgba(0,0,0,0.3)";
    const display = this.state.visible ? "flex" : "none";

    return (
      <Wrapper
        display={display}
        rgba={rgba}
      >
        <ModalInner>
          <ModalContent>
              {title.length > 0 && <Title>{title}</Title>}
              {body.length > 0 && <Body>{body}</Body>}
              {this.props.children}

            {cancelHandler &&
              <Button
                onClick={() => {
                  this.cancelHandler();
                }}
              >
                cancel
              </Button>}

            {okHandler &&
              <Button
                onClick={() => {
                  this.okHandler();
                }}
              >
                ok
              </Button>}
          </ModalContent>
        </ModalInner>
      </Wrapper>
    );
  }
}

Modal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
  backgroundAlpha: PropTypes.number,
  backgroundColor: PropTypes.string,
  okHandler: PropTypes.func
};

Modal.defaultProps = {
  visible: false,
  title: "",
  body: "",
  backgroundAlpha: 0.5,
  backgroundColor: "000000"
};
