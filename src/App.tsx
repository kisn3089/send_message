import React from 'react';
import {
  ButtonContainer,
  Container,
  Coulmn,
  Fade,
  ImageCon,
  ImgTextContainer,
  InnerContainer,
  InputContainer,
  TextArea,
  UpDiv,
} from './components/App/styles';
import Button from './components/atoms/Button';
import useMain from './hook/useMain';
import GlobalStyle from './styles/GlobalStyle';
import Input from './components/atoms/Input';
import Text from './components/atoms/text/index';
import XMAS from './assets/XMas.png';

function App() {
  const {
    save,
    color,
    inputValue,
    textValue,
    textChange,
    inputChange,
    saveClick,
  } = useMain();
  return (
    <>
      <GlobalStyle />
      <Container bgColor={color.bgColor}>
        <InnerContainer>
          <Coulmn>
            <Fade save={save}>
              <TextArea
                id="text"
                value={textValue}
                onChange={textChange}
                maxLength={35}
                placeholder="전하고 싶은 말을 입력하세요.">
                {inputValue}
              </TextArea>
              <InputContainer>
                <Input
                  id="ps"
                  type="text"
                  value={inputValue}
                  handleChange={inputChange}
                  fontSize="22px"
                  color={color.color}
                  width="100px"
                  placeholder="Ps"
                  maxLength={10}
                />
              </InputContainer>
              <ButtonContainer>
                <Button
                  content="저장"
                  width="100px"
                  height="40px"
                  fontSize="18px"
                  handleClick={saveClick}
                  disabled={textValue === ''}
                />
              </ButtonContainer>
            </Fade>
            <UpDiv save={save}>
              <Text
                content={textValue}
                fontSize="32px"
                fontWeight="700"
                margin="30px 0 0 0"
                color={color.color}
                customStyle={{
                  border: 'none',
                  letterSpacing: '2px',
                  lineHeight: '1.15',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
              <Text
                content={inputValue}
                fontSize="22px"
                fontWeight="700"
                margin="30px 0 0 0"
                color={color.color}
                customStyle={{
                  border: 'none',
                  letterSpacing: '2px',
                  lineHeight: '1.15',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </UpDiv>
          </Coulmn>
          <ImgTextContainer save={save}>
            {save && <ImageCon src={XMAS} alt="" />}
            <Text
              content="Merry Christmas"
              color="#FFD159"
              margin="5px 0 0 0"
              fontSize="24px"
              opacity={save ? '1' : '0'}
              customStyle={{
                fontFamily: "font-family: 'Pacifico', cursive;",
                left: '50%',
              }}
            />
          </ImgTextContainer>
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
