import styled from "styled-components";
import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BorderProps,
} from "styled-system";

type ButtonProps = LayoutProps &
  SpaceProps &
  FlexboxProps &
  ColorProps &
  BorderProps;

export const GowButton = styled.button<ButtonProps>`
    padding: 0.8em 1.8em;
    border: 2px solid #ae1a1a;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: .3s;
    z-index: 1;
    font-family: inherit;
    color: #ae1a1a;
   }
   
   button::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #ae1a1a;
    transition: .5s ease;
    display: block;
    z-index: -1;
   }
   
   button:hover::before {
    width: 105%;
   }
   
   button:hover {
    color: #111;
   }
`;
