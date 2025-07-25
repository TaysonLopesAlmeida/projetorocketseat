function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  /*
  const alt = document.querySelector("#alt")

  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de mayk brito sorrindo, usando óculos escuros e camiseta preta, barba e fundo roxo."
    )
  } else {
    alt.setAttribute(
      "alt",
      "Foto de mayk brito sorrindo, usando óculos e camiseta preta, barba e fundo amarelo."
    )
  }
  */
}
