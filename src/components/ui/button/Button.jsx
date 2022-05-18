import React from "react";

// Constants
import { BUTTON_NATIVE_TYPES, BUTTON_VARIANTS } from "@/constants/ui/button.constants";

// Styles
import "./Button.scss";

/**
 * Button ui component
 *
 * @param {String} className
 * @param {String} variant
 * @param {String} type
 * @param {Boolean} disabled
 * @param {Boolean} loading
 * @returns {HTMLButtonElement}
 */
const Button = (
  {
    children,
    className,
    variant  = "default",
    type     = "button",
    disabled = false,
    loading  = false,
    onClick,
    rest
  }
) => {
    const _className = [
      'ui-btn',
      (BUTTON_VARIANTS.includes(variant)) ? `ui-btn--${variant}` : `ui-btn--${BUTTON_VARIANTS[0]}`,
      (disabled) ? 'ui-btn--disabled' : '',
      (loading)  ? 'ui-btn--loading'  : '',
      className
    ].join(' ');

    return (
        <button
            className={_className}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
