productArr = []


//product class for buns

class Bun {

    constructor(glaze, quantity) {
        this.glaze = glaze
        this.quantity = quantity
    }
}

function addToCart() {

    var glaze = document.getElementById('bunGlaze').value

    var quantity = document.getElementById('bunQuantity').value
    var quantityCount = parseInt(quantity)

    for(var i = 0; i < quantityCount; i ++) {
        var bun = new Bun(glaze, quantity)
        productArr.push(bun)
    }

    console.log(productArr)
    alert('Batch added to cart!')

    updateCartNumber(productArr.length)
}

function updateCartNumber(num) {
    var cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = num

}

