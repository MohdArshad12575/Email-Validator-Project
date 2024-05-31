let btn = document.querySelector(".submit-btn");
let img = document.querySelector("#loading-icon");
let inp = document.querySelector("input");

// let barBtn = document.querySelector(".bar-icon");

let navHidden = document.querySelector(".nav-hidden");

const handleFn = () => {
  navHidden.classList.toggle("hidden");
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (inp.value == "") {
    alert("please write something you have not written anything yet");
  } else {
    img.src = "img/loading.svg";
    getData();
  }
});

let url =
  "https://api.emailvalidation.io/v1/info?apikey=ema_live_gLg1lVHpXae4id0AgoGJXI1Zk0RPCZ8DSv30U1hx&email=";

async function getData() {
  let email = inp.value;
  let data = await fetch(url + email);
  let finaldata = await data.json();

  img.src = "";

  let resultcont = document.querySelector(".results");
  resultcont.innerHTML = "";

  for (key of Object.keys(finaldata)) {
    if (finaldata[key] !== "" && finaldata[key] !== " ") {
      let paragraph = document.createElement("p");
      paragraph.textContent = `${key} : ${finaldata[key]}`;
      resultcont.appendChild(paragraph);
    }
  }
}
