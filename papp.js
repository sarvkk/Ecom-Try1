
// script.js

$(document).ready(function() {
    // Attach a click event handler to the element with ID 'close-icon'
    $('.close-icon').click(function(event) {
        event.preventDefault(); // Prevents the default action of the link
        // Find the parent row and remove it
        $(this).closest('tr').remove();
    });
});
$(document).ready(function() {
    // Function to calculate subtotal for each item and update total price
    function updateCartTotal() {
        var cartTotal = 0;
        $('.total').each(function() {
            var itemTotal = parseFloat($(this).text().replace('Rs.', '').replace(',', ''));
            cartTotal += itemTotal;
        });
        $('.ftotal').text('Rs.' + cartTotal);
}

    // Initial calculation when the page loads
    updateCartTotal();

    // Event listener for input change on quantity
    $('input[type="number"]').on('input', function() {
        var quantity = $(this).val();
        var pricePerItem = parseFloat($(this).closest('tr').find('.per').text().replace('Rs.', '').replace(',', ''));
        var total = quantity * pricePerItem;
        $(this).closest('tr').find('.total').text('Rs.' + total);
        updateCartTotal();
    });
});


$(document).ready(function() {
    // Function to load cart items from sessionStorage
    function loadCartItems() {
        var cartProducts = sessionStorage.getItem('cartProducts');
        if (cartProducts) {
            var products = JSON.parse(cartProducts);
            // Clear existing cart items
            $('.cart-items').empty();
            // Iterate over each product and add it to the cart
            products.forEach(function(product) {
                var cartItem = `
                    <div class="cart-row">
                        <span class="cart-item cart-column">${product.name}</span>
                        <span class="cart-price cart-column">${product.price}</span>
                        <span class="cart-quantity cart-column">1</span>
                    </div>
                `;
                $('.cart-items').append(cartItem);
            });
            updateCartTotal(); // Update total price
        }
    }

    // Function to update cart total
    function updateCartTotal() {
        var total = 0;
        $('.cart-price').each(function() {
            var price = parseFloat($(this).text().replace('$', ''));
            total += price;
        });
        $('.cart-total-price').text('$' + total.toFixed(2));
    }

    // Load cart items when the page is ready
    loadCartItems();

    // Handle "Add to Cart" button click
    $('.add-to-cart').click(function() {
        // Retrieve product details from the DOM
        var productName = $('.detailscontainerh1').text();
        var productPrice = $('.buyoption h1').text();
        // Create product object
        var product = {
            name: productName,
            price: productPrice
        };
        // Get existing cart items from sessionStorage
        var cartProducts = sessionStorage.getItem('cartProducts');
        if (!cartProducts) {
            // If cart is empty, create a new array and add the product
            cartProducts = [];
        } else {
            // If cart already has items, parse the JSON string
            cartProducts = JSON.parse(cartProducts);
        }
        // Add the new product to the cart
        cartProducts.push(product);
        // Save updated cart items to sessionStorage
        sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        // Reload cart items
        loadCartItems();
    });

    // Handle purchase button click
    $('.btn-purchase').click(function() {
        // You can add your purchase logic here
        alert('Thank you for your purchase!');
        // Clear sessionStorage after purchase
        sessionStorage.removeItem('cartProducts');
        // Clear cart display
        $('.cart-items').empty();
        $('.cart-total-price').text('$0');
    });
});
