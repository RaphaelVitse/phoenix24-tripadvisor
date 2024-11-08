const modalScreen = document.getElementById("btn-connect");
const modal = document.getElementsByClassName("modal");

modalScreen.addEventListener("click", () => {
  console.log("je clique");

  modal.classList.add("on");
});
