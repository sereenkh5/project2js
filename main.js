  async function getprodect(){

const respons = await fetch("https://dummyjson.com/products");

const data = await respons.json();

const products= data.products;
console.log(products);
const result =products.map (function(ele){

    return `<h2> ${ ele.title} </h2> 
    <img src=${ele.thumbnail}>
    `;
}).join('');
document.querySelector(".prodect").innerHTML=result;



}
getprodect();