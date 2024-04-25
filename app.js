let btn = document.querySelector(".submit-btn");
let img = document.querySelector("#loading-icon");
let inp = document.querySelector("input");

let url =
  "https://api.emailvalidation.io/v1/info?apikey=ema_live_gLg1lVHpXae4id0AgoGJXI1Zk0RPCZ8DSv30U1hx&email=";

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  img.src = "img/loading.svg";
  getData();
});

async function getData() {
  let email = inp.value;
  let data = await fetch(url + email);
  let finaldata = await data.json();
  img.src = "";
  let str = ``;
  for (key of Object.keys(finaldata)) {
    if (finaldata[key] !== "" && finaldata[key] !== " ") {
      str = str + `${key} : ${finaldata[key]}`;
    }
  }
  let h5 = document.createElement("h5");
  let res = document.querySelector(".result-sec");
  res.appendChild(h5);
  h5.innerText = str;
}
