//Create product cards to add to DOM

var prod_img;
var prod_name;
var prod_desc;
var prod_price;
var prod_url;
var prod_card;

//Pull info from products.js for list items
for (var i = 0; i < products.length; i++) {
	product = products[i];
	pic = product.img_src;
	name = product.name;
	desc = product.description;
	price = product.price;
	url = product.link;
	
	//Create div containers and add img placeholder and class to each card
	prod_card = document.createElement("div");
	prod_card.setAttribute("class", "card");
	var prod_img = document.createElement("img");
	prod_img.src = pic;
	prod_card.appendChild(prod_img);

	//Add name info to li, add to ul
	prod_name = document.createTextNode(name);
	//console.log(prod_name);
	var li_name = document.createElement("li");
	li_name.appendChild(prod_name);
	var prod_list = document.createElement("ul");
	prod_list.appendChild(li_name);

	//Add description info to li, add to ul
	prod_desc = document.createTextNode(desc);
	var li_desc = document.createElement("li");
	li_desc.appendChild(prod_desc);
	prod_list.appendChild(li_desc);

	//Add price info to li, add to ul
	prod_price = document.createTextNode(price);
	var li_price = document.createElement("li");
	li_price.appendChild(prod_price);
	prod_list.appendChild(li_price);

	//Add URL info to li, add to ul
	prod_url = document.createTextNode(url);
	var li_url = document.createElement("li");
	li_url.appendChild(prod_url);
	prod_list.appendChild(li_url);

	//Add ul to div
	prod_card.appendChild(prod_list);
	
	//Add to DOM
	var dest_div = document.getElementById("gallery");
	dest_div.appendChild(prod_card);
		
	}

