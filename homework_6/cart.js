function updateQty() {
    let val = document.getElementById("bunQuantity").value;
    document.getElementById("qty").innerHTML = val;
    updateSubtotal(val)

}

function updateSubtotal(val) {
    document.getElementById("subtotal").innerHTML = "$" + (Math.round(val * 2.5 * 100) / 100).toFixed(2);
}