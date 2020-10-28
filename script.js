let main = document.querySelector("#main");
main.style.visibility = "hidden";
let intro = document.querySelector("#intro");
intro.style.visibility = "visible";
const render = () => {
  let start = document.querySelector("#start");

  let back = document.querySelector("#back");
  let intro = document.querySelector("#intro");
  let next = document.querySelector("#next");

  start.onclick = () => {
    let itm = document.querySelector("#intro");

    let cln = itm.cloneNode(true);
    console.log(cln);
    document.querySelector("#body").appendChild(cln);
    document.querySelector("#intro").remove();
    let main = document.querySelector("#main");
    main.style.visibility = "visible";
    let intro = document.querySelector("#intro");
    intro.style.visibility = "hidden";
    render();
  };

  back.onclick = () => {
    let itm = document.querySelector("#main");
    let cln = itm.cloneNode(true);
    console.log(cln);
    document.querySelector("#body").appendChild(cln);
    document.querySelector("#main").remove();
    let intro = document.querySelector("#intro");
    let main = document.querySelector("#main");
    intro.style.visibility = "visible";
    main.style.visibility = "hidden";
    render();
  };
};

render();
