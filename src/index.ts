const producsbuttons: NodeList = document.querySelectorAll('button')
const shoppingCart: string[] = [];
const cart: HTMLElement = document.querySelector('#cart');
//console.log(producsbuttons)

function updateCart (): void{
    document.querySelector('#productsInCart').textContent = shoppingCart.length.toString();
}

function addClickevent(): void{ // Void means that the function wont return anything.
    producsbuttons.forEach((productButton)=>{
        productButton.addEventListener('click', (event: any)=>{
            //console.log('You clicked on a button', event.target);
            const productTtitle: string = event.target.parentNode.getAttribute('data-product')
            shoppingCart.push(productTtitle);
            //console.log(productTtitle);
            //console.log(shoppingCart);
            updateCart();

        });
    });
}

function listproductsInCart(): void{
    cart.innerHTML = '';
    shoppingCart.forEach((item)=>{
        const elem: HTMLElement = document.createElement('li');
        elem.innerText = item;
        elem.classList.add('product-title');
        cart.append(elem)
    })
}

document.querySelector('#open-cart').addEventListener('click', ()=>{
    document.querySelector('#cart').classList.toggle('hide');
    listproductsInCart();
});

addClickevent();