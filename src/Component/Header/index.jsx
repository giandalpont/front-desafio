import './style.css';

import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <a href="https://www.webmotors.com.br" title="Webmotors" target="_blank" rel="noopener noreferrer" className="link-logo">
        <img src="../../img/webmotors.svg" alt="webmotors" height="29" />
      </a>
      <div>
        <p><span>Levando você mais longe!</span></p>
      </div>
    </header>
  );
};

export default Header;