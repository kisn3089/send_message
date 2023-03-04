import React, { createElement, useCallback, useEffect } from 'react';
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
import XMASRESIZE from './assets/XMas_resize.png';
import Character from './assets/charater_resize.png';

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

  // f9ce4dc41b1789f0049b5e90297fdfbd
  // id 873228

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    // return () => document.body.removeChild(script);
  }, []);

  const sendKakao = () => {
    const { Kakao } = window as any;
    if (Kakao) {
      if (!Kakao.isInitialized()) {
        console.log(Kakao);
        Kakao.init('f9ce4dc41b1789f0049b5e90297fdfbd');

        Kakao.Share.sendScrap({
          requestUrl: 'http://localhost:3000', // 페이지 url
          templateId: 90714, // 메시지템플릿 번호
          templateArgs: {
            PROFILE: Character, // 프로필 이미지 주소 ${PROFILE}
            THUMB: XMASRESIZE, // 썸네일 주소 ${THUMB}
            TITLE: '당신에게 메세지를 보냈어요!', // 제목 텍스트 ${TITLE}
            DESC: '무슨 말을 했을까~~~ 궁금하지?', // 설명 텍스트 ${DESC}
          },
        });
      } else {
        console.log(Kakao);
      }
    }
  };

  const data = {
    title: 'title',
    text: 'text',
    url: 'https://marvel-sable.vercel.app/',
  };

  const share = useCallback(() => {
    if (navigator.canShare(data)) {
      navigator.share(data);
    } else {
      alert('지원하지 않는');
    }
  }, []);

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
                maxLength={30}
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
                <Button
                  content="테스트"
                  width="100px"
                  height="40px"
                  fontSize="18px"
                  // handleClick={share}
                  handleClick={sendKakao}
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
            <ImageCon src={XMAS} alt="" save={save} />
            <Text
              content="Merry Christmas"
              color="#FFD159"
              margin="5px 0 0 0"
              fontSize="24px"
              opacity={save ? '1' : '0'}
              customStyle={{
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
