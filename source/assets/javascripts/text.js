import Typed from 'typed.js';

const terminalText = () => {
  const firstLine = () => {
      new Typed('#first-line', {
        strings: ["", " Ivan Reyes"],
        typeSpeed: 25,
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
        typeSpeed: 25,
        loop: false,
        showCursor: false
      });
  };

  const thirdLineOne = () => {
    new Typed('#third-line-one', {
      strings: ["", " ruby"],
      typeSpeed: 25,
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
    typeSpeed: 25,
    loop: false,
    showCursor: false
    });
  }

  const displayInfo = () => {
    document.querySelector(".info").hidden = false
    document.querySelector(".wrapper").hidden = false
  }

  firstLine();
  guest(2, secondLine, 1500);
  guest(3, thirdLineOne, 4000);
  setTimeout(rubyColor, 4500);
  setTimeout(thirdLineTwo, 4450);
  setTimeout(displayInfo, 7000);
}

export { terminalText };
