let productArr = []

//Product Class for Buns

class Bun {

    constructor(glaze, quantity) {
        this.glaze = glaze
        this.quantity = quantity
    }
}

//Update Cart

function addToCart() {

    let glaze = document.getElementById('bunGlaze').value

    let quantity = document.getElementById('bunQuantity').value
    let quantityCount = parseInt(quantity)

    for (let i = 0; i < quantityCount; i++) {
        let bun = new Bun(glaze, quantity)
        productArr.push(bun)
    }

    console.log(productArr)
    alert('Batch added to cart!')

    updateCartNumber(productArr.length)

    //Add Array to Local Storage
    window.localStorage.cart = JSON.stringify(productArr);
}

function updateCartNumber(num) {
    let cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = num

}

//Image Change

function imageChange() {
    let img2Change = document.getElementById('imageToChange');
    let val = document.getElementById("bunGlaze").value;

    if (val == "none") {
        img2Change.src = "Images/Dropdown/none.jpg";
    }
    else if (val == "sugarMilk") {
        img2Change.src = "Images/Dropdown/sugar-milk.jpg";
    }
    else if (val == "vanillaMilk") {
        img2Change.src = "Images/Dropdown/vanilla-milk.jpg";
    }
    else if (val == "doubleChocolate") {
        img2Change.src = "Images/Dropdown/double-chocolate.jpg";
    }
}

//Checkout Update Quantity

function updateQty() {
    let val = document.getElementById("bunQuantity").value;
    document.getElementById("qty").innerHTML = val;
    updateSubtotal(val)
}

function updateSubtotal(val) {
    document.getElementById("subtotal").innerHTML = "$" + (Math.round(val * 2.5 * 100) / 100).toFixed(2);
}

//Create Local Storage (Check to see if local storage is empty)

// const addToLocalStorage = item => {
//     if (!window.localStorage.cart) {
//         window.localStorage.cart = JSON.stringify([item]);
//     } else {
//         const cart = JSON.parse(window.localStorage.cart);
//         cart.push(item);
//         window.localStorage.cart = JSON.stringify(cart);
//     }
// }

//Invoke Cart Number on Load (if there is something in cart)

function onLoad() {
    if (window.localStorage.cart) {
        const cart = JSON.parse(window.localStorage.cart);
        updateCartNumber(cart.length);
    }
}

// On page load (load item count for cart)

onLoad()

