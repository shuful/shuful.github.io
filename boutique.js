function submitpayment() {
    var name = document.getElementById('name').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;

    if (name && destination && date) {
        alert('Booking successful!\nName: ' + name + '\nDestination: ' + destination + '\nDate: ' + date);
    } else {
        alert('Please fill in all fields before submitting the booking.');
    }
}
function redirectToBooking(promoCode) {
    window.location.href = "booking.html?promo"+promoCode;
}

function submitReview() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var review = document.getElementById("review").value;

    if (fullName === '' || email === '' || review === '') {
        alert("Please fill in all the fields before submitting your review.");
    } else {
        alert("Thanks for the feedback, " + fullName + "!");
    }
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    cart.forEach(product => {
        container.innerHTML += `<p>${product.name} - ₦${product.price}</p>`;
    });
    if(cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
    }
    document.getElementById('cart-count').innerText = cart.length;
}

  function addToCart() {
    const productId = event.target.dataset.productId;
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }

  const addToCartButton = document.getElementById('product-button');
addToCartButton.addEventListener('click', function() {
    addItemToCart(123);
});

function addItemToCart(productId) {
    // Get the div that will contain the cart items
    var cartItemsDiv = documentdocument.getElementById('cart-items');

    // Create a new paragraph element for the new cart item
    var newCartItem = document.createElement('p');
    newCartItem.textContent = 'Item with ID ' + productId + ' added to cart.';

    // Add the new cart item to the cart items div
    cartItemsDiv.appendChild(newCartItem);
}