function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  /*if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/
  const img = document.querySelector("#profile img");
  //encontra a tag image
  if (html.classList.contains("light")) {
    //substituir imagem e descrição
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Paulo na estação rodoviária a noite");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Paulo de cabelo preso com um fundo branco");
  }
}
