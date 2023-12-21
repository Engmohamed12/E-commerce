let list = document.querySelector('.list');
let payment = document.querySelector('.payment')
let close = document.querySelector('.close')





let products= [
    {   id:1,
        name:'iphone 11',
        image:'iph 11.png',
        price:50,
        quantity:1
    },
    {   id:1,
        name:'iphone 12',
        image:'iph12.png',
        price:50,
        quantity:1
    },
    {   id:1,
        name:'iphone 12pro max',
        image:'iph 12pro max.png',
        price:50,
        quantity:1
    },
    {   id:1,
        name:'iphone 13',
        image:'iph 13.png',
        price:50,
        quantity:1
    },
    {   id:1,
        name:'iphone 14pro max',
        image:'iph 14pro max.png',
        price:50,
        quantity:1
    },
    {   id:1,
        name:'iphone 15pro max',
        image:'iph 15max.png',
        price:50,
        quantity:1
    },


];


let listCards = [];

function initApp(){
    products.forEach((value, key)=> {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML= `
        <img class="img" src="${value.image}">
        <div class="title"> ${value.name} </div>
        <div class="price"> ${value.price.toLocaleString()}$ </div>
        <button class="payBtn" onclick="addToCard(${key})"> buy now </button>
        `;
        list.appendChild(newDiv);
    })
} 
initApp();

let productBtn = document.querySelector('.payBtn');

productBtn.addEventListener('click',()=> {
    payment.style.display="flex";
})
close.addEventListener('click',()=> {
    payment.style.display="none";
})


function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard()
}

function reloadCard(){
    listCards.innerHTML ='';
    let count = 0;
    let totalPrice =0;
    listCards.forEach((value, key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML =`
            <div><img src="${value.image}"></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}$</div>
            <div>
            <button onclick="changeQuatity(${key}, ${value.quantity-1})"> -</button>
            <button onclick="changeQuatity(${key}, ${value.quantity+1})"> +</button>
            </div>
            `;
            listCards.appendChild(newDiv);
        }
    })
}

