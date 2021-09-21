import React from "react";
import { Link, Button } from "@chakra-ui/react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomButton = styled(Button)`
  border: 1px solid #000
`;

const ButtonWithStyle = ({ title, to }) => (
  <Link as={CustomButton} to={to}>{title}</Link>
);

ButtonWithStyle.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string
}



export default ButtonWithStyle;
