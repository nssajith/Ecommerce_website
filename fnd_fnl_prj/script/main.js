let items=[
	{pic_id: 0,photo: "images/s1.gif",productname: "Red Sand",price: 600},
	{pic_id: 1,photo: "images/s2.gif",productname: "Bluish Greeny",price: 500},
	{pic_id: 2,photo: "images/s3.gif",productname: "Red Rocky",price: 700},
	{pic_id: 3,photo: "images/s4.gif",productname: "Grey Blufy",price: 699},
	{pic_id: 4,photo: "images/s5.jpg",productname: "Bla-Red foty",price: 750},
	{pic_id: 5,photo: "images/s6.gif",productname: "Bluoo Bluy",price: 800},
	{pic_id: 6,photo: "images/s7.gif",productname: "Blink Blany",price: 900},
	{pic_id: 7,photo: "images/s8.gif",productname: "Toppo Dowy",price: 950}
	];

	const cart=document.querySelector(".cart span");


/* ----------------------------------------------------- PRINTING IMAGE IN HOME PAGE -------------------------------------------------------- */

function print_img()
{	
	p_temp = ""

	for (let i = 0; i < items.length; i++) 
	{
		p_temp += `
				<div class="container_in">
				<p><img src =" ${items[i].photo}" width="240px" height="270px" alt="Stylish Shoe...." ></p>
				<div class="info">
					<h3>${items[i].productname}</h3>
					<h3>&#8377; - ${items[i].price}</h3>
					<b class="add-cart">Add to Cart</b> 
				</div>   
				</div> `

	}   
	document.getElementById('container').innerHTML = p_temp;

	/* ------------------------------------------------------ ADD EVENT TO CART BUTTTON -------------------------------------------- */
	
	const element = document.getElementsByClassName('add-cart');

	for (let i = 0; i < element.length; i++) 
		{	
			
			element[i].addEventListener("click", function(){entering_data(items[i].pic_id)});
			
		}
}

print_img();

/*------------------------------------------------ INCREASE CART NUMBER ----------------------------------------------*/

let store = [];

function get_data()
{
	store = JSON.parse(localStorage.getItem('shop_data'));

	if(store == null)
	{
		store = [];
	}
	else
	{
		cart.innerHTML = store.length;
	}
}

get_data();

/* ----------------------------------------  ENTERING DATA IN LOCAL Strg ------------------------------------------ */

function entering_data(n)
    {
		
		store_item = items[n].pic_id;
        store.push(store_item);
		
		localStorage.setItem('shop_data', JSON.stringify(store));
		
		get_data();

    }
                