const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')
const productContainer = document.getElementById("pro-container");
import { produits } from './products.js';

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}
 produits.forEach(p => {
  const div = document.createElement("div");
  div.className = "pro";

  const img = document.createElement("img");
  img.src = p.image;
  img.alt = "";

  const des = document.createElement("div");
  des.className = "des";

  const h5 = document.createElement("h5");
  h5.textContent = p.name;

  const h4 = document.createElement("h4");
  h4.textContent = p.price + " FCFA";

  des.appendChild(h5);
  des.appendChild(h4);

  const a = document.createElement("a");
  a.href = "";

  const i = document.createElement("i");
  i.className = "fal fa-shopping-cart cart";

  a.appendChild(i);

  div.appendChild(img);
  div.appendChild(des);
  div.appendChild(a);

  productContainer.appendChild(div);
});