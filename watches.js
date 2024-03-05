let product = null;
fetch("products.json")
.then(Response => Response.json())
.then(data =>{
    product = data ;
    console.log(product);
    addDataToHTML();
})
let listproduct =document.querySelector(`.listproduct`);
function addDataToHTML(){
    product.forEach(product =>{
        let newproduct = document.createElement(`a`);
        newproduct.href =`/detail.html?id =` + product.id;
        newproduct.classList.add(`item`);
        newproduct.innerHTML = `
        <img src = "${product.image}">
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>
        `;
        
        listproduct.appendChild(newproduct);
    })
}





let products = null;
fetch(`products.json`)
.then(Response => Response.json())
.then(data =>{
    product = data ;
    showDetail();
})
function showDetail(){
    let detail=document.querySelector(`.detail`);
    let productId=new URLSearchParams(window.location.search).get(`id`);
    let thisProduct = products.filter(value =>{
        return value.id == productId
    })[0];

    if(!thisProduct){
        window.location.href ="/";
    }

    detail.querySelector(`.image img`).src = thisProduct.image;
    detail.querySelector(`name`).innerText = thisProduct.name;
    detail.querySelector(`price`).innerText = `$` + thisProduct.price;
    detail.querySelector(`description`).innerText = thisProduct.description;

    let listproduct = document.querySelector(`.listproduct`);
   (products.filter(value => value.id != productId))
   .forEach(product => {
    let newproduct = document.createElement(`a`);
    newproduct.href = `/detail.html?id=`+ product.id;
    newproduct.innerHTML =`
    <img src ="${product.image}">
    <h2>${product.name}</h2>
    <div class = "price"> ${product.price}</div> 
    `;
    listproduct.appendChild(newproduct);
   })
    
}
