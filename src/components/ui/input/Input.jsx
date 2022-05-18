import React from "react";

// Constants
import { INPUT_NATIVE_TYPES } from "@/constants/ui/input.constants";

// Styles
import "./Input.scss";

/**
 * Input ui component
 *
 * @param {String} className
 * @param {String} type
 * @param {Boolean} disabled
 * @returns {HTMLInputElement}
 */
const Input = (
  {
    className,
    placeholder = "",
    type     = "text",
    disabled = false,
    value = "",
    onChange = () => {},
    onKeyDown = () => {},
    onClick = () => {},
    rest
  }
) => {
  const _className = [
    'ui-control',
    (disabled) ? 'ui-control--disabled' : '',
    className
  ].join(' ');

  return (
    <input
      className={_className}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onClick={onClick}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      {...rest}
    />
  );
}

export default Input;
