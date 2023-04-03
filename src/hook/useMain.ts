import React, { useCallback, useEffect, useRef, useState } from "react";
// import XMASRESIZE from '../assets/XMas_resize.png';
// import Character from '../assets/charater_resize.png';

const useMain = () => {
  const [message, setMessage] = useState({ title: "", content: "" });
  const imgRef = useRef(null);

  // 카카오로 공유하기
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  // const shareKakao = useCallback(() => {
  //   const { Kakao } = window as any;
  //   if (Kakao) {
  //     if (!Kakao.isInitialized()) {
  //       Kakao.init('f9ce4dc41b1789f0049b5e90297fdfbd');

  //       Kakao.Share.sendScrap({
  //         requestUrl: 'https://send-message.vercel.app', // 페이지 url
  //         templateId: 90714, // 메시지템플릿 번호
  //         templateArgs: {
  //           PROFILE: Character, // 프로필 이미지 주소
  //           THUMB: XMASRESIZE, // 썸네일 주소
  //           TITLE: '당신에게 메세지를 보냈어요!', // 제목 텍스트
  //           DESC: '무슨 말을 했을까~~~ 궁금하지?', // 설명 텍스트
  //         },
  //       });
  //     }
  //   }
  // }, []);

  const MessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { id, value } = e.currentTarget;
      setMessage((prev) => {
        return { ...prev, [id]: value };
      });
    },
    [message]
  );

  return {
    imgRef,
    message,
    MessageChange,
    // shareKakao,
  };
};

export default useMain;
