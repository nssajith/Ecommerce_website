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
const total_value = document.querySelector(".total span");
const cancel = document.getElementsByClassName('box_cancel');
const check = document.getElementById('out');



/*-------------------------------------------------- INCREASE CART NUMBER -------------------------------------------------- */

let store = []

function cart_num()
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

export {cart_num};

/* ----------------------------------------------------- PRINTING IMAGE IN CART PAGE -------------------------------------------------------- */

function display_img()
{ 
    let d_temp = ""
    let s_num = 0

    for(let j=0; j< store.length; j++)
    {
        for(let i=0; i< items.length; i++)
        {   
            if (items[i].pic_id == store[j])
            {
                d_temp += `<div class="img_box">
                                <div class="box_id">${s_num+1}</div>
                                <div class="box_name">${items[i].productname}</div>
                                <div class="box_pic"><img src =" ${items[i].photo}" width = "80px" height ="110px" alt="Stylish Shoe...." ></div>
                                <div class="box_price">&#8377; - ${items[i].price}</div>
                                <div class="box_cancel">&#10008;</div>
                           </div>
                           <div class="box_line"></div>
                            `
                s_num += 1             
            }
        }
     
    }
    document.getElementById('products').innerHTML = d_temp;

    /* ------------------------------------------------------ ADD EVENT TO CART BUTTON -------------------------------------------- */
    
    for (let i = 0; i < cancel.length; i++) 
    {	
        
        cancel[i].addEventListener("click", function(){delete_img(items[i].pic_id)});
        
    }
}

export {display_img};

/* ------------------------------------------------------ INCREASE BASKET VALUE -------------------------------------------- */


function total_val()
{
    let total = []
    let sum = 0

    for(let i=0; i<store.length; i++)
    {
        let get_store = store[i]
        total.push(items[get_store].price)
    }
    for(let i=0; i<total.length; i++)
    {
        sum += total[i]
    }
    total_value.innerHTML = sum
}

export {total_val};

/* ------------------------------------------------------ DELETE IMAGE -------------------------------------------- */

function delete_img(n)
{   
    store.splice(n,1);
    localStorage.setItem("shop_data",JSON.stringify(store));

    cart_num();
    display_img();

    total_val();
}

/* ------------------------------------------------------ CHECKOUT BUTTON -------------------------------------------- */


function checkout()
{  
    store=[];
    localStorage.setItem("shop_data",JSON.stringify(store));

    cart_num();
    display_img();

    total_val();

}

check.addEventListener("click",checkout)


export {checkout};