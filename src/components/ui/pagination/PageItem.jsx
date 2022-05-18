import React from "react";

/**
 * Page item component
 *
 * @param {Number} number
 * @param {Boolean} isActive
 * @param {Function} onChange
 * @returns {ReactComponentElement}
 */
const PageItem = (
  {
    number,
    sign,
    disabled = false,
    active = false,
    onChange = () => {},
  }
) => {

  const _className = [
    'page-item',
    'page-item',
    disabled ? 'page-item-disabled' : '',
    active ? 'page-item-active' : '',
  ].join(' ');

  /**
   * On page item click
   */
  const onClick = () => {
    if (!disabled) {
      onChange();
    }
  };

  return (
    <li className={_className}>
      <a onClick={onClick}>
        {sign}
      </a>
    </li>
  );
}

export default PageItem;
