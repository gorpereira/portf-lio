const texto = "Desenvolvedor Front-End em aprendizado.";
const digitando = document.getElementById("digitando");

let i = 0;

function escrever() {
  if (i < texto.length) {
    digitando.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 80);
  }
}

escrever();

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
    },

    color: {
      value: "#00bfff",
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.5,
    },

    size: {
      value: 3,
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#00bfff",
      opacity: 0.4,
      width: 1,
    },

    move: {
      enable: true,
      speed: 2,
    },
  },
});
