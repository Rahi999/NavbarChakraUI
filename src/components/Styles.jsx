import React, { useState } from "react";
import styled from "styled-components";

const Appstyled = styled.div`
   text-align:center;

`;

const AppHeader = styled.header`
    background-color: teal;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    font-size: 20px;
    color:white;
    `;

const AppLogo=styled.img`
 height: 40vmin;
pointer-events: NamedNodeMap;
Animation: App-logo-spin infinite 20s linear;

@media (prefers-reduced-motion: no-preference) {
  Animation: App-logo-spin infinite 20s linear
}
`;
export default function Styles() {




  return (


    <Appstyled>Styles
      <AppHeader> Header
        <AppLogo src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"/>

      </AppHeader>

    </Appstyled>
  )
}