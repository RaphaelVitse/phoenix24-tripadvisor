document.addEventListener("DOMContentLoaded", () => {
  const switchModalOpening = document.querySelector("#btn-connect");
  const switchModalClosing = document.querySelector(".close");
  const modal = document.querySelector(".modal");

  switchModalOpening.addEventListener("click", () => {
    console.log("je clique pour ouvrir");
    modal.classList.add("on");
  });
  switchModalClosing.addEventListener("click", () => {
    console.log("je clique pour fermer");
    modal.classList.remove("on").add(".hidden");
  });
});
