const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  document.getElementById("price").textContent = product.price;
	// for image
	document.getElementById("main-image").src = product.image;
 
	document.getElementById("product-name").textContent = product.name;
  // document.getElementById("product-price").textContent = product.price + " FCFA";
  // document.getElementById("product-image").src = product.image;
}