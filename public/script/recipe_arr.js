foodIngredient = ["egg", "tomato", "milk", "flour"];

function aa() {
  fetch("/product_recommendation")
    .then((response) => response.json())
    .then((data) => sendApiRequest(data));
}
aa();
// sendApiRequest(foodIngredient);

async function sendApiRequest(foodIngredient) {
  let APP_ID = "37ac9f7b";
  let API_KEY = "035448c1a99f76de9e04734952dc79e9";
  for (let i = 0; i < foodIngredient.length; i++) {
    let url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`;
    url = url + foodIngredient[i];
    console.log(url);
    let response = await fetch(`${url}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data);
  }
}

function useApiData(data) {
  // Recipe Card
  let container = document.querySelector("#container");
  let template = document.querySelector("#template");
  let length = data.hits.length;

  for (let i = 0; i < 2; i++) {
    let title = data.hits[i].recipe.label;
    let img = data.hits[i].recipe.image;
    let viewURL = data.hits[i].recipe.url;

    let cardTemplate = template.content.querySelector(".card");

    let cardTitle = cardTemplate.querySelector(".card-title");
    let cardImg = cardTemplate.querySelector(".card-img-top");
    let viewBtn = cardTemplate.querySelector(".btn-success");

    cardTitle.innerHTML = title;
    cardImg.setAttribute("src", img);
    viewBtn.setAttribute("href", viewURL);

    let card = document.importNode(cardTemplate, true);
    container.appendChild(card);
  }
}
