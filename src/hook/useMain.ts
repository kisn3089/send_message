import React, { useCallback, useState } from 'react';

const useMain = () => {
  const [color, setColor] = useState({ bgColor: '#C85A5D', color: '#FFC97C' });
  const [textValue, setTextValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [save, setSave] = useState(false);

  const textChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextValue(e.target.value);
    },
    []
  );

  const inputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const saveClick = useCallback((e: React.MouseEvent) => {
    setSave(true);
  }, []);
  return {
    color,
    save,
    textValue,
    inputValue,
    textChange,
    inputChange,
    saveClick,
  };
};

export default useMain;
