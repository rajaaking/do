document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mendapatkan nilai dari form
    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;

    // Pemetaan harga makanan
    const foodPrices = {
        "nasi_goreng": 25000,
        "mie_goreng": 20000,
        "sate": 30000,
        "burger": 35000
    };

    // Menghitung total harga
    const totalPrice = foodPrices[food] * quantity;

    // Menampilkan ringkasan pesanan
    document.getElementById("order-name").textContent = `Nama: ${name}`;
    document.getElementById("order-food").textContent = `Makanan: ${food.replace("_", " ").toUpperCase()}`;
    document.getElementById("order-quantity").textContent = `Jumlah: ${quantity}`;
    document.getElementById("order-address").textContent = `Alamat: ${address}`;
    document.getElementById("order-total").textContent = `Total: Rp ${totalPrice.toLocaleString()}`;

    // Menyembunyikan form dan menampilkan ringkasan pesanan
    document.getElementById("order-summary").classList.remove("hidden");
    document.getElementById("order-form").classList.add("hidden");

    // Menampilkan pesan Terima Kasih dengan animasi
    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.classList.remove("hidden");
    thankYouMessage.classList.add("show"); // Menambahkan kelas show untuk menampilkan pesan

    // Mengosongkan form setelah pengiriman
    document.getElementById("order-form").reset();

    // Menyembunyikan pesan Terima Kasih setelah beberapa detik (misalnya 5 detik)
    setTimeout(function() {
        thankYouMessage.classList.remove("show");
        thankYouMessage.classList.add("hidden");
    }, 5000); // Menyembunyikan setelah 5 detik
});
