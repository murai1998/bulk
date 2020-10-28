let start = document.querySelector("#start");
let main = document.querySelector("#main");
main.style.visibility = "hidden";
start.onclick = () => {
  document.querySelector("#intro").remove();
  main.style.visibility = "visible";
  start.style.visibility = "hidden";
};
