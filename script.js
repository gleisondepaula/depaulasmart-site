function ampliar(img) {
  const popup = document.getElementById("popup");
  const imgPopup = document.getElementById("imgPopup");
  imgPopup.src = img.src;
  popup.style.display = "flex";
}

function fechar() {
  document.getElementById("popup").style.display = "none";
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({ behavior: "smooth" });
  });
});
