// sendApiRequest();
// async function sendApiRequest() {
//   let APIKEY = "6C02336BB54244A5863F51E9C4A6E2CD";

//   let items = ["rice"];
//   for (let i = 0; i < items.length; i++)
//   {
//     let item = items[i];
//   fetch(`https://api.rainforestapi.com/request?api_key=${APIKEY}&type=search&amazon_domain=amazon.in&search_term=${item}&sort_by=price_low_to_high
//     `)
//     .then((results) => results.json())
//     .then((data) => useApiData(data));
//   }
// }

const obj = [
  {
    title: "SunnyBee Wheat Flour - Maida (1kg)",
    price: "₹45",
    link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A02303912XRDQ06DUOPPJ&url=%2FSunnyBee-Maida-1kg-Pack-3%2Fdp%2FB08VW5T2RY%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dmaida%26qid%3D1642625964%26sr%3D8-2-spons%26psc%3D1&qualifier=1642625964&id=2256449632539391&widgetName=sp_atf",
    image: "https://m.media-amazon.com/images/I/41Fip3NO5LL._AC_UL320_.jpg",
  },
  {
    title: "Pure Kadaknath Eggs, High Protein Eggs",
    price: "₹349",
    link: "https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A0793603INNVBXIBF6G5&url=%2FKadaknath-Agro-World-Organic-Cholesterol%2Fdp%2FB08WPLFY6Z%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Deggs%26qid%3D1642626638%26sr%3D8-2-spons%26psc%3D1&qualifier=1642626638&id=8747262035157452&widgetName=sp_atf",
    image: "https://m.media-amazon.com/images/I/71M9GocseaL._AC_UL320_.jpg",
  },
  {
    title: "Fresh Carrot - Ooty, 500g",
    price: "₹59",
    link: "https://www.amazon.in/Fresh-Carrot-Ooty-500g-Pack/dp/B07BG6X1SG/ref=sr_1_6_0o_fs?almBrandId=ctnow&fpw=alm&keywords=carrot&qid=1642626794&sr=8-6",
    image: "https://m.media-amazon.com/images/I/81weI2ULFYL._AC_UL320_.jpg",
  },
  {
    title: "Nestle a+ Slim Fat Free Milk Tetra Pack, 1Ltr",
    price: "₹84",
    link: "https://www.amazon.in/Nestle-Milk-Slim-Tetra-Pack/dp/B01FQXADJI/ref=sr_1_11_0o_fs?almBrandId=ctnow&fpw=alm&keywords=milk&qid=1642626966&sr=8-11",
    image: "https://m.media-amazon.com/images/I/717U2Jbqb+L._AC_UL320_.jpg",
  },
  {
    title: "Vedaka Sugar, 1 kg",
    price: "₹52",
    link: "https://www.amazon.in/Amazon-Brand-Vedaka-Popular-Sugar/dp/B07F24TSK4/ref=sr_1_9_0o_fs?almBrandId=ctnow&fpw=alm&keywords=sugar&qid=1642627067&sr=8-9",
    image: "https://m.media-amazon.com/images/I/91cnOWgt7QL._AC_UL320_.jpg",
  },
];
console.log(obj);

for (let m = 0; m < 5; m++) {
  console.log(obj[m]);
  useApiData(obj[m]);
}

function useApiData(data) {
  console.log(data);
  let container = document.querySelector("#container");
  let template = document.querySelector("#template");

  // let k;
  // let price=0;
  // for(k=0;k<10;k++){
  //   try{
  //     price = data.search_results[k].price.raw;
  //     break;
  //   }catch(e){
  //     console.log(e);
  //   }
  // }
  let title = data.title;
  let img = data.image;
  let url = data.link;
  let price = data.price;

  console.log(price);

  let cardTemplate = template.content.querySelector(".card");

  let cardTitle = cardTemplate.querySelector(".card-title");
  let cardImg = cardTemplate.querySelector(".card-img-top");
  let buyBtn = cardTemplate.querySelector(".btn-success");
  let btnName = cardTemplate.querySelector(".buyBtn");
  let priceSpan = cardTemplate.querySelector("#price");

  cardTitle.innerHTML = title;
  buyBtn.setAttribute("name", title);
  cardImg.setAttribute("src", img);
  buyBtn.setAttribute("href", url);
  priceSpan.innerHTML = price;

  let card = document.importNode(cardTemplate, true);
  container.appendChild(card);
}

let purchasedArr = [];
function eventOnClick(event) {
  let itemName = event.path[0].name;
  console.log(itemName);
  purchasedArr.push(itemName);
  console.log(purchasedArr);
}

btns = document.getElementsByClassName("buyBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", eventOnClick);
}
