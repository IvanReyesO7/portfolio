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


  const guest = (n, callback, time) => {
    setTimeout(function(){
      document.querySelector(`#guest${n}`).hidden = false;
      callback();
    },time);
  };

  const secondLine = () => {
      new Typed('#second-line', {
        strings: ["", " Full-Stack developer"],
        typeSpeed: 50,
        loop: false,
        showCursor: false
      });
  };

  const thirdLineOne = () => {
    new Typed('#third-line-one', {
      strings: ["", " ruby"],
      typeSpeed: 50,
      loop: false,
      showCursor: false
    });
  };

  const rubyColor = () => {
    document.querySelector("#third-line-one").style = "color: #09f430;";
  }

  const thirdLineTwo = () => {
    new Typed('#third-line-two', {
    strings: ["", " ivan-reyes-portfolio.rb"],
    typeSpeed: 50,
    loop: false,
    showCursor: false
    });
  }


  firstLine();
  guest(2, secondLine, 2000);
  guest(3, thirdLineOne, 4500);
  setTimeout(rubyColor, 5500);
  setTimeout(thirdLineTwo, 5500);
}

export { terminalText };
