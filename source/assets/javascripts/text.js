import Typed from 'typed.js';

const terminalText = () => {
  const firstLine = () => {
      new Typed('#first-line', {
        strings: ["", " Ivan Reyes"],
        typeSpeed: 50,
        loop: false,
        showCursor: false
      });
  };


  const guest = (callback) => {
    setTimeout(function(){
      document.querySelector('#guest2').hidden = false;
      callback();
    },2000);
  };

  const secondLine = () => {
      new Typed('#second-line', {
        strings: ["", " Full-Stack developer"],
        typeSpeed: 50,
        loop: false,
        showCursor: false
      });
  };

  firstLine();
  guest(secondLine);
}

export { terminalText };
