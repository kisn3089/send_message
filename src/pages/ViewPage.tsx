import { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Coulmn,
  ImageCon,
  ImgTextContainer,
  InnerContainer,
  TwoButtonContainer,
} from "../components/App/styles";
import Text from "../components/atoms/text";
import XMAS from "../assets/XMas.png";
import Button from "../components/atoms/Button";
import useMain from "../hook/useMain";

const ViewPage = () => {
  const { title, content } = useParams();
  const { imgRef } = useMain();
  const navigate = useNavigate();

  // Share 기능
  const data = {
    title: title,
    text: "메세지를 확인해주세요.",
    url: `https://send-message.vercel.app/view/${title}/${content}`,
  };
  const share = useCallback(() => {
    if (!navigator.canShare) {
      alert("모바일에서 사용해주세요.");
    } else {
      navigator.share(data);
    }
  }, []);

  return (
    <Container ref={imgRef}>
      <InnerContainer>
        <Coulmn>
          <Text
            content={content}
            fontSize="32px"
            fontWeight="700"
            margin="30px 0 0 0"
            customStyle={{
              border: "none",
              letterSpacing: "2px",
              lineHeight: "1.15",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <Text
            content={title}
            fontSize="22px"
            fontWeight="700"
            margin="30px 0 0 0"
            customStyle={{
              border: "none",
              letterSpacing: "2px",
              lineHeight: "1.15",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Coulmn>
        <ImgTextContainer>
          <ImageCon src={XMAS} alt="XMas" />
          <Text
            content="Merry Christmas"
            color="#FFD159"
            margin="5px 0 0 0"
            fontSize="24px"
            customStyle={{
              left: "50%",
            }}
          />
          <TwoButtonContainer>
            <Button
              content="공유하기"
              width="100px"
              height="40px"
              fontSize="18px"
              handleClick={share}
            />
            <Button
              content="작성하기"
              width="100px"
              height="40px"
              fontSize="18px"
              handleClick={() => navigate("/create")}
            />
          </TwoButtonContainer>
        </ImgTextContainer>
      </InnerContainer>
    </Container>
  );
};

export default memo(ViewPage);
