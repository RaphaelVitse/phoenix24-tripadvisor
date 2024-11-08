document.addEventListener("DOMContentLoaded", () => {
  const switchModalOpening = document.querySelector("#btn-connect");
  const modal = document.querySelector(".modal");

  switchModalOpening.addEventListener("click", () => {
    console.log("je clique");

    modal.classList.add("on");
  });
});
