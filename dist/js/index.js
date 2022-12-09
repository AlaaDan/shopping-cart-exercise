const producsbuttons = document.querySelectorAll('button');
const shoppingCart = [];
const cart = document.querySelector('#cart');
//console.log(producsbuttons)
function updateCart() {
    document.querySelector('#productsInCart').textContent = shoppingCart.length.toString();
}
function addClickevent() {
    producsbuttons.forEach((productButton) => {
        productButton.addEventListener('click', (event) => {
            //console.log('You clicked on a button', event.target);
            const productTtitle = event.target.parentNode.getAttribute('data-product');
            shoppingCart.push(productTtitle);
            //console.log(productTtitle);
            //console.log(shoppingCart);
            updateCart();
        });
    });
}
function listproductsInCart() {
    cart.innerHTML = '';
    shoppingCart.forEach((item) => {
        const elem = document.createElement('li');
        elem.innerText = item;
        elem.classList.add('product-title');
        cart.append(elem);
    });
}
document.querySelector('#open-cart').addEventListener('click', () => {
    document.querySelector('#cart').classList.toggle('hide');
    listproductsInCart();
});
addClickevent();
