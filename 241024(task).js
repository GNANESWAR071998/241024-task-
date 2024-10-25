
let cardContainer=document.createElement("Container");
let image=document.createElement("img");
let title=document.createElement("p");
let price=document.createElement("span");
let buyNowBtn=document.createElement("button");

image.setAttribute("src","https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB.png")
image.style.width="300px"
title.textContent="One Plus Mobile"
price.textContent=50000;
buyNowBtn.innerText="BUYNOW"

cardContainer.style.border="2px solid black";
cardContainer.style.borderRadius="15px";
cardContainer.style.padding="15px";
cardContainer.style.display="inline-block"
cardContainer.style.background="linear-gradient(lightgrey,lightblue)";



cardContainer.append(image,title,price,buyNowBtn)
document.body.appendChild(cardContainer)