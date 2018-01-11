// Create two row, four per row product layout
var product;
var prod_card = '';

function print(prod_card) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = prod_card;
}

for (var i = 0; i < products.length; i += 1) {
	product = products[i];
	prod_card +=  '<h3>Name:' + product.name + '</h3>';
}

print(prod_card);