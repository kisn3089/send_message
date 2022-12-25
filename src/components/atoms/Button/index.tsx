import { memo, useMemo } from 'react';

import { CSSProperties, ReactElement } from 'react';
import { StyledButton } from './styles';

export interface IStyledButton {
  color?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  borderRadius?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  padding?: string;
  customStyle?: CSSProperties;
  type?: string;
}

export interface IButton extends IStyledButton {
  className?: string;
  id?: string;
  content?: string | ReactElement;
  disabled?: boolean;
  handleClick?: (e: any) => void | Promise<void>;
}

const Button = (props: IButton) => {
  const {
    id,
    className,
    color,
    width,
    height,
    minWidth,
    minHeight,
    content,
    fontSize,
    fontWeight,
    fontFamily,
    borderRadius,
    backgroundColor,
    backgroundImage,
    customStyle,
    disabled,
    handleClick,
  } = props;

  const style = useMemo(() => {
    return {
      ...customStyle,
      width,
      height,
      minWidth,
      minHeight,
      color,
      fontSize,
      borderRadius,
      backgroundColor,
      fontWeight,
      fontFamily,
    };
  }, [
    width,
    height,
    minWidth,
    minHeight,
    color,
    fontSize,
    borderRadius,
    backgroundColor,
    fontWeight,
    fontFamily,
    customStyle,
  ]);

  return (
    <StyledButton
      className={className}
      id={id}
      style={style}
      backgroundImage={backgroundImage}
      disabled={disabled}
      onClick={handleClick}>
      {content}
    </StyledButton>
  );
};

export default memo(Button);
