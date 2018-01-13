// Create two row, four per row product layout

//Create containers and add information to each var
//Combine var inside of prod_card
//Add class to prod_card
//Add prod_card to DOM

//console.log('product page');
var prod_name;
var prod_desc;
var prod_price;
var prod_url;
var prod_img = document.createElement("img");
var prod_card;

for (var i = 0; i < products.length; i++) {
	product = products[i];
	name = product.name;
	desc = product.description;
	price = product.price;
	url = product.link;
	
	prod_card = document.createElement("div");
	prod_card.setAttribute("class", "card");
	prod_card.appendChild(prod_img);
	
	prod_name = document.createTextNode(name);
	//console.log(prod_name);
	var li_name = document.createElement("li");
	li_name.appendChild(prod_name);
	var prod_list = document.createElement("ul");
	prod_list.appendChild(li_name);
	
	prod_desc = document.createTextNode(desc);
	var li_desc = document.createElement("li");
	li_desc.appendChild(prod_desc);
	prod_list.appendChild(li_desc);
	
	prod_price = document.createTextNode(price);
	var li_price = document.createElement("li");
	li_price.appendChild(prod_price);
	prod_list.appendChild(li_price);
	
	prod_url = document.createTextNode(url);
	var li_url = document.createElement("li");
	li_url.appendChild(prod_url);
	prod_list.appendChild(li_url);
	
	prod_card.appendChild(prod_list);
	}

var dest_div = document.getElementById("output");
dest_div.appendChild(prod_card);