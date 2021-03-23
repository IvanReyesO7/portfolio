import Typed from 'typed.js';

const terminalText = () => {
  const firstLine = () => {
    new Typed('#first-line', {
      strings: ["", " Ivan Reyes"],
      typeSpeed: 50,
      loop: false
    });
  };
  firstLine();
  const texto = document.querySelector("#guest2");
  console.log(texto);
  texto.hidden = false
}

export { terminalText };
