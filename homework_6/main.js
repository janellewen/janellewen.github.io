productArr = []


//product class for buns

class Bun {

    constructor(glaze, quantity) {
        this.glaze = glaze
        this.quantity = quantity
    }
}

function addToCart() {

    let glaze = document.getElementById('bunGlaze').value

    let quantity = document.getElementById('bunQuantity').value
    let quantityCount = parseInt(quantity)

    for(let i = 0; i < quantityCount; i ++) {
        let bun = new Bun(glaze, quantity)
        productArr.push(bun)
    }

    console.log(productArr)
    alert('Batch added to cart!')

    updateCartNumber(productArr.length)
}

function updateCartNumber(num) {
    let cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = num

}

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
