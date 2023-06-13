import React from 'react';

const SocialButton = ({ iconClass }) => {
  return (
    <button className="socialButton">
      <i className={iconClass}></i>
    </button>
  );
};

export default SocialButton;
