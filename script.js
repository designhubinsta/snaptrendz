function redirectToProduct(name, price, description, image, discount) {
    const url = `product-details.html?name=${encodeURIComponent(name)}&price=${price}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}&discount=${discount}`;
    window.location.href = url;
}

// Product Details Page Handling
if (window.location.pathname.includes("product-details.html")) {
    const params = new URLSearchParams(window.location.search);
    document.getElementById('product-name').innerText = params.get('name');
    document.getElementById('product-price').innerText = params.get('price');
    document.getElementById('product-description').innerText = params.get('description');
    document.getElementById('product-image').src = params.get('image');
    document.getElementById('product-discount').innerText = ` (${params.get('discount')}% OFF)`;
}
