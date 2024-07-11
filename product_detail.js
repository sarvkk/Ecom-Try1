const products = [
    { id: 1, name: "Eames Plastic Side Chair RE DSR", img: "./assets/pcard1.jpg", price: 250 },
    { id: 2, name: "Anchor Bracelet", img: "./assets/pcard2.jpg", price: 320 },
    { id: 3, name: "Lounge Chair & Ottoman", img: "./assets/pcard3.jpg", price: 290 },
    { id: 4, name: "ACX Mesh", img: "./assets/pcard4.jpg", price: 370 },
    { id: 5, name: "Aluminium Chairs EA 117/118/119-Work", img: "./assets/pcard5.jpg", price: 230 },
    { id: 6, name: "Prismatic Table", img: "./assets/pcard6.jpg", price: 280 },
    { id: 7, name: "Toolbox RE", img: "./assets/pcard7.jpg", price: 300 },
    { id: 8, name: "Eames Fiberglass Side Chair LSR", img: "./assets/pcard8.jpg", price: 260 },
    { id: 9, name: "HAl RE Tube", img: "./assets/pcard9.jpg", price: 340 },
    { id: 10, name: "Soft Seat Outdoor", img: "./assets/pcard10.jpg", price: 380 },
    { id: 11, name: "Wire Chair LKR", img: "./assets/pcard11.jpg", price: 380 },
    { id: 12, name: "Happy Bin RE Large", img: "./assets/pcard12.jpg", price: 380 },
    { id: 13, name: "HAl Lounge Chair & Ottoman", img: "./assets/pcard13.jpg", price: 380 },
    { id: 14, name: "Eames Elephant(Plywood)", img: "./assets/pcard14.jpg", price: 380 },
    { id: 15, name: "Eames Plastic Side Chair RE DSW", img: "./assets/pcard15.jpg", price: 380 },
    { id: 16, name: "Soft Pad Chairs EA 217/219 - Work", img: "./assets/pcard16.jpg", price: 380 },
];

function getProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('product-img').src = product.img;
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-price').innerText = `$${product.price}`;
    } else {
        document.body.innerHTML = '<p>Product not found</p>';
    }
}

window.onload = getProductDetails;
