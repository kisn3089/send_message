import styled from 'styled-components';

export const Container = styled.div<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => bgColor};
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100vw;
  height: 100vh;
  max-width: 300px;
  max-height: calc(100vh - 40px);
  overflow: hidden;
`;

export const Coulmn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
`;

export const TextArea = styled.textarea<{ color?: string }>`
  width: 300px;
  height: 100px;
  resize: none;
  background-color: transparent;
  font-size: 20px;
  border: 2px solid #f3eed9;
  border-radius: 10px;
  padding: 10px 10px;
  margin-bottom: 10px;
  color: ${(props) => (props.color ? props.color : '#FFC97C')};
  &::placeholder {
    font-size: 20px;
    color: #fff;
    opacity: 0.6;
    margin-right: 20px;
  }
  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgTextContainer = styled.div<{ save: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  bottom: ${(props) => (props.save ? '100px' : '70px')};
  transition: 0.5s linear;
`;

export const ImageCon = styled.img`
  object-fit: cover;
  transition: 0.5s linear;
  width: 350px;
`;

export const Fade = styled.div<{ save: boolean }>`
  transform: ${(props) => (props.save ? 'translateY(-100px)' : '')};
  opacity: ${(props) => (props.save ? '0' : 1)};
  transition: 0.5s linear;
`;

export const UpDiv = styled.div<{ save: boolean }>`
  transform: ${(props) => (props.save ? 'translateY(-200px)' : '')};
  transition: 0.7s linear;
`;
