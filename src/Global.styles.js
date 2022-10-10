import styled, { createGlobalStyle, css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const marginTop = css`
  margin-top: 100px;
`;

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
    font-size: 20px;

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
  
  html{
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body{
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    /* overflow-anchor: none; // désactiver ancrage du défilement (scroll anchoring) */
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: unset;
  }

  p{
    line-height: 30px;
    color: #555555;
  }
`;

export const flex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  position: relative;

  canvas{
    cursor: grab;
  }

  canvas:active{
    cursor: grabbing;
  }
`;

export default GlobalStyle;
