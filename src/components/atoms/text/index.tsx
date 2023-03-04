import { useMemo, memo } from 'react';

import { CSSProperties } from 'react';
import { StyledText } from './styles';

export interface IText {
  className?: string;
  color?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  customStyle?: CSSProperties;
  content?: any;
  opacity?: string;
  hidden?: boolean;
  type?: any;
  handleClick?: (e: any) => void | Promise<void>;
  onBlur?: () => void;
  onMouseEnter?: (e: any) => void;
}

const Text = (props: IText) => {
  const {
    className,
    content,
    handleClick,
    padding,
    margin,
    color,
    opacity,
    customStyle,
    hidden,
    fontSize,
    fontWeight,
    fontFamily,
    onBlur,
    onMouseEnter,
  } = props;

  const style = useMemo(() => {
    return {
      color,
      padding,
      margin,
      opacity,
      fontSize,
      fontWeight,
      fontFamily,
      ...customStyle,
    };
  }, [
    color,
    padding,
    margin,
    customStyle,
    opacity,
    fontSize,
    fontWeight,
    fontFamily,
  ]);

  return (
    <StyledText
      className={className}
      hidden={hidden}
      style={style}
      onClick={handleClick}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}>
      {content}
    </StyledText>
  );
};

export default memo(Text);
