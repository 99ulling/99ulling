import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
  color: string;
}

const Tag = ({ children, color }: Props) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default Tag;

const Wrapper = styled.span(
  {
    borderRadius: "1rem",
    padding: "0.4em 0.8rem",
    fontSize: "10px",
    color: "white",
    fontWeight: "bold",
  },
  (props) => ({ backgroundColor: props.color })
);
