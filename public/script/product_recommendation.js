// var cityList = JSON.parse(list);
// console.log(cityList);

function aa() {
  fetch("/product_recommendation")
    .then((response) => response.json())
    .then((data) => console.log(data, "hh"));
}
