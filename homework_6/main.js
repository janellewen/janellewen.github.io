// Array of product objects

let productArr = []

//Product class for buns

class Bun {

    constructor(glaze, quantity) {
        this.glaze = glaze
        this.quantity = quantity
    }
}

//Update cart quantity

function addToCart() {

    let glaze = document.getElementById('bunGlaze').value

    let quantity = document.getElementById('bunQuantity').value
    let quantityCount = parseInt(quantity)

    // for (let i = 0; i < quantityCount; i++) {
    let bun = new Bun(glaze, quantity)
    productArr.push(bun)
    // }

    console.log(productArr)
    alert('Batch added to cart!')

    //Add Array to Local Storage
    window.localStorage.cart = JSON.stringify(productArr);
    updateCartNumber()
}

function updateCartNumber() {
    let currentCart = JSON.parse(localStorage.getItem("cart"))
    let sum = 0;
    for (let i = 0; i < currentCart.length; i++) {
        sum += parseInt(currentCart[i].quantity)
    }
    let cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = sum

}

//Image change on product detail page

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

//Cart item calculate subtotal based on quantity

function updateQty() {
    let val = document.getElementById("bunQuantity").value;
    document.getElementById("qty").innerHTML = val;
    updateSubtotal(val)
}

function calculateSubtotal(val) {
    let subT = (Math.round(val * 2.5 * 100) / 100).toFixed(2)
    return subT
}

function updateSubtotal(val) {
    document.getElementById("subtotal").innerHTML = "$" + calculateSubtotal(val);
}


//Check local storage on page load and update cart number

function onLoad() {
    if (window.localStorage.cart) {
        const cart = JSON.parse(window.localStorage.cart);
        updateCartNumber();
    }
}

// Update totals in summary section

function updateTotals() {
    let sub = document.getElementById("subtotal")
    let tot = document.getElementById("total")
    let cart = JSON.parse(localStorage.getItem("cart"))
    let sum = 0
    for (let i = 0; i < cart.length; i++) {
        sum += parseInt(cart[i].quantity)
    }
    let subtotal = (Math.round(sum * 2.5 * 100) / 100)
    sub.innerHTML = "$" + subtotal.toFixed(2)
    tot.innerHTML = "$" + subtotal.toFixed(2)
}

// Remove item from cart

function removeItemFromCart(div, cart) {
    let newIndex;
    let classNames = document.getElementById("items-container").getElementsByClassName("cartInfoDetails")
    for (let i = 0; i < classNames.length; i++) {
        if (classNames[i] == div) {
            newIndex = i
            break
        }
    }
    div.remove();
    cart.splice(newIndex, 1);

    // update cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartNumber()

    // update Totals
    updateTotals()
}

// Change thumbnail in the item div

function setThumbnailSrc(val) {
    if (val == "none") {
        return "Images/Dropdown/none.jpg";
    }
    else if (val == "sugarMilk") {
        return "Images/Dropdown/sugar-milk.jpg";
    }
    else if (val == "vanillaMilk") {
        return "Images/Dropdown/vanilla-milk.jpg";
    }
    else if (val == "doubleChocolate") {
        return "Images/Dropdown/double-chocolate.jpg";
    }
}

// Change glaze name in the item div

function getGlazeName(val) {
    if (val == "none") {
        return "None";
    }
    else if (val == "sugarMilk") {
        return "Sugar Milk";
    }
    else if (val == "vanillaMilk") {
        return "Vanilla Milk";
    }
    else if (val == "doubleChocolate") {
        return "Double Chocolate";
    }
}

// Populate what is inside the div on the cart page

function fillCart() {
    let currentCart = JSON.parse(localStorage.getItem("cart"))
    console.log("currentCart: ", currentCart)
    if (!currentCart) {
        currentCart = {}
    }
    for (let i = 0; i < currentCart.length; i++) {

        let cartInfoDetailsDiv = document.createElement("div");
        cartInfoDetailsDiv.setAttribute("class", "cartInfoDetails");

        //Div Thumbnail Image
        let bunThumbnailDiv = document.createElement("div");

        //Image Creation
        let bunThumbnail = document.createElement("img");
        bunThumbnail.setAttribute("class", "cart-image");
        bunThumbnail.src = setThumbnailSrc(currentCart[i].glaze);

        bunThumbnailDiv.appendChild(bunThumbnail)

        //Cart Info Text Div
        let cartInfoTextDiv = document.createElement("div");
        cartInfoTextDiv.setAttribute("class", "cart-info-text");

        //Cart Info Title Div
        let cartInfoTitleDiv = document.createElement("div");
        cartInfoTitleDiv.setAttribute("class", "cart-info-title");

        //p Remove
        let pRemove = document.createElement("p");

        //span Remove
        let spanRemove = document.createElement("span");
        spanRemove.innerHTML = "remove";
        spanRemove.setAttribute("class", "removeButton")
        spanRemove.onclick = () => { removeItemFromCart(cartInfoDetailsDiv, currentCart) };

        pRemove.appendChild(spanRemove)
        cartInfoTitleDiv.innerHTML = "<h2>The Original</h2>"
        cartInfoTitleDiv.appendChild(pRemove)

        //p GlazeType
        let pGlazeType = document.createElement("p");

        pGlazeType.innerHTML = getGlazeName(currentCart[i].glaze)

        //p Quantity
        let pQuantity = document.createElement("p");

        //span Quantity
        let spanQuantity = document.createElement("span");
        spanQuantity.setAttribute("class", "qty");
        spanQuantity.innerHTML = currentCart[i].quantity

        //span Subtotal
        let spanSubtotal = document.createElement("span");
        spanSubtotal.setAttribute("class", "subtotal");
        spanSubtotal.innerHTML = "$" + calculateSubtotal(currentCart[i].quantity)

        //Bun equation for subtotal
        pQuantity.innerHTML = spanQuantity.outerHTML + " buns x $2.50 = <b> " + spanSubtotal.outerHTML + "</b>"

        cartInfoTextDiv.appendChild(cartInfoTitleDiv)
        cartInfoTextDiv.appendChild(pGlazeType)
        cartInfoTextDiv.appendChild(pQuantity)

        cartInfoDetailsDiv.appendChild(bunThumbnailDiv)
        cartInfoDetailsDiv.appendChild(cartInfoTextDiv)

        let container = document.getElementById("items-container")
        container.appendChild(cartInfoDetailsDiv)
    }
    updateTotals()
}

// On page load (load item count for cart)

onLoad()

