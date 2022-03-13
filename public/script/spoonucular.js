function aa() {
  fetch("/product_recommendation")
    .then((response) => response.json())
    .then((data) => sendApiRequest(data));
}
aa();
async function sendApiRequest(data4) {
  // let APIKEY = "b71070296bdf439e8c8a543ce2649f8f";
  let APIKEY = "1cdb329e640240fcb703a296649a2fd1";

  let itemsList = ["sugar", "eggs", "flour"];

  // let items = "sugar,eggs,flour";
  let items = data4.toString();
  fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${items}&number=6&sort=max-used-ingredients
    `)
    .then((results) => results.json())
    .then((data) => useApiData(data));
}

function useApiData(data) {
  let container = document.querySelector("#container");
  let template = document.querySelector("#template");

  let cardTemplate = template.content.querySelector(".card");

  const number = 6;
  for (let i = 0; i < number; i++) {
    // console.log(data[i]);
    let id = data[i].id;
    let title = data[i].title;
    let image = data[i].image;
    let likes = data[i].likes;
    let missedCount = data[i].missedIngredientCount;
    let missedArr = data[i].missedIngredients;

    let cardTitle = cardTemplate.querySelector(".card-title");
    let cardImg = cardTemplate.querySelector(".card-img-top");
    let missCount = cardTemplate.querySelector("#missCount");
    let likesbtn = cardTemplate.querySelector("#likes");
    let bakwas = cardTemplate.querySelector("#missIngArr");

    cardTitle.innerHTML = title;
    cardTitle.setAttribute("id", id);
    missCount.innerHTML = missedCount;
    likesbtn.innerHTML = likes;
    cardImg.setAttribute("src", image);

    let ingList = "";
    for (let k = 0; k < missedCount; k++) {
      ingList += "<br>" + (k + 1) + ". " + missedArr[k].name;
    }

    bakwas.innerHTML = ingList;

    let card = document.importNode(cardTemplate, true);
    container.appendChild(card);
  }
}

function callUrl(data12) {
  console.log(data12);
  let a = document.createElement("a");
  a.target = "_blank";
  a.href = data12;
  a.click();
}

async function myFunction() {
  console.log(this.event.target.id);
  let iid = this.event.target.id;
  let APIKEY = "1cdb329e640240fcb703a296649a2fd1";

  fetch(`https://api.spoonacular.com/recipes/${iid}/information?apiKey=${APIKEY}
          `)
    .then((results) => results.json())
    .then((data1) => callUrl(data1.spoonacularSourceUrl));
}
