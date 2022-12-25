import { memo } from 'react';
import React, { CSSProperties, SetStateAction } from 'react';
import { StyledInput } from './styles';

export interface IStyledInput {
  customStyle?: CSSProperties;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  isReadOnly?: boolean;
  border?: string;
}

export interface IInput extends IStyledInput {
  className?: string;
  id?: string;
  value?: any;
  type?: string;
  name?: string;
  placeholder?: string;
  isAutoFocus?: boolean;
  maxLength?: number;
  autoComplete?: string;
  onFocus?: (e?: any) => void;
  onBlur?: () => void;
  handleChange?: (e: any) => void | SetStateAction<any>;
  handleKeyPress?: (e: any) => void | SetStateAction<any>;
  onKeyUp?: (e: any) => void | SetStateAction<any>;
  onKeyDown?: (e: any) => void | SetStateAction<any>;
}

const Input = React.forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    className,
    type,
    value,
    name,
    handleChange,
    placeholder,
    backgroundColor,
    borderRadius,
    color,
    customStyle,
    fontSize,
    fontFamily,
    height,
    margin,
    padding,
    width,
    maxLength,
    id,
    border,
    isAutoFocus = false,
    isReadOnly = false,
    autoComplete,
    handleKeyPress,
    onFocus,
    onBlur,
    onKeyUp,
    onKeyDown,
  } = props;

  const style: CSSProperties = {
    ...customStyle,
    backgroundColor,
    borderRadius,
    color,
    fontSize,
    fontFamily,
    height,
    margin,
    padding,
    width,
  };

  return (
    <StyledInput
      ref={ref}
      className={className}
      type={type}
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      style={style}
      autoFocus={isAutoFocus}
      readOnly={isReadOnly}
      isReadOnly={isReadOnly}
      name={name}
      maxLength={maxLength}
      id={id}
      border={border}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      autoComplete={autoComplete}
    />
  );
});

export default memo(Input);
