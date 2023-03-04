import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ButtonContainer,
  Container,
  Coulmn,
  InnerContainer,
  InputContainer,
  TextArea,
} from '../components/App/styles';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import useMain from '../hook/useMain';

const CreatePage = () => {
  const { message, MessageChange } = useMain();
  const navigator = useNavigate();
  return (
    <>
      <Container>
        <InnerContainer>
          <Coulmn>
            <TextArea
              id="content"
              value={message.content}
              onChange={MessageChange}
              maxLength={30}
              placeholder="전하고 싶은 말을 입력하세요.">
              {message.content}
            </TextArea>
            <InputContainer>
              <Input
                id="title"
                type="text"
                value={message.title}
                handleChange={MessageChange}
                fontSize="22px"
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
                handleClick={() =>
                  navigator(`/view/${message.title}/${message.content}`)
                }
                disabled={message.content === ''}
              />
            </ButtonContainer>
          </Coulmn>
        </InnerContainer>
      </Container>
    </>
  );
};

export default memo(CreatePage);
