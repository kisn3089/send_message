import styled, { keyframes } from 'styled-components';
import { IStyledButton } from '.';

export const keyAni = keyframes`
  0% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(-10px);
  }
  100%  {
    transform: translateX(0);
  }
`;

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style?.borderRadius : '30px'};
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.style?.backgroundColor ? props.style?.backgroundColor : '#fff'};
  color: ${(props) => (props.style?.color ? props.style?.color : '#c54245')};
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : '16px'};
  font-weight: 700;
  :disabled {
    cursor: default;
    background-color: #00884f;
    border-radius: 5px;
    color: #fff;
    animation: ${keyAni} 1.5s ease-in-out infinite;
  }
`;
