import styled from "styled-components";
import { flex } from "../../Global.styles";

export const Item = styled.li`
    ${flex}
    background-color: white;
    padding: 10px 20px;
    transition: all .3s ease-out;
    & > *{
        font-size: 1.5rem;

        @media screen and(max-width:300px){
            font-size: 1rem;
        }
    }
    &:hover{
        cursor: pointer;
        background-color: black;
        color:white
    }
`

export const Items = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  ${flex}
  top: 0;
  z-index: 9999;
  background-color: white;
`;
