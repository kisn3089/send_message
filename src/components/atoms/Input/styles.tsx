import styled from 'styled-components';
import { IStyledInput } from '.';

export const StyledInput = styled.input<IStyledInput>`
  display: flex;
  align-items: center;
  justify-content: left;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #f3eed9;
  width: ${(props) => (props.style?.width ? props.style?.width : '270px')};
  height: ${(props) => (props.style?.height ? props.style?.height : '40px')};
  padding: ${(props) => (props.style?.padding ? props.style?.padding : '0')};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : '16px'};
  color: ${(props) => (props.style?.color ? props.style?.color : '#FFC97C')};
  transition: 0.3s;
  &::placeholder {
    font-size: ${(props) =>
      props.style?.fontSize ? props.style?.fontSize : '14px'};
    color: #ddd;
    opacity: 0.7;
    padding: 38px;
  }
  &:focus {
    outline: none;
    transition: 0.3s;
    border-bottom: 2px solid '#BFA5A3';
  }
`;
