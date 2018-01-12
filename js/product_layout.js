// Create two row, four per row product layout
console.log('product page');
var product;
var prod_card = '';

function print(prod_card) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = prod_card;
}

for (var i = 0; i < products.length; i += 1) {
	product = products[i];
	prod_card +=  '<div><h3>' + product.name + '</h3>' + '<h4>' + product.description + '</h4>' + '<h4>' + product.price + '</h4></div>';
}

print(prod_card);