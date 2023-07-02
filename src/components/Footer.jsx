import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>phone number: +995 593 79 18 31</p>
      <p>email: giorgi.gengashvili0@gmail.com</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 20px 0 10px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: fit-content;
  gap:20px;
  border-bottom: 3px red solid;
  margin-bottom: 60px;
  @media(min-width:740px){
    flex-direction: row;
  }
`;
