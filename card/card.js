const id = new URLSearchParams(window.location.search).get("id");

if (id) {
  loadProductData(id);
} else {
  console.error("ID товара отсутствует в URL адресе");
  document.getElementById("title").textContent = "Товар не указан";
}

async function loadProductData(productId) {
  try {
    const response = await fetch('../db.json');
    
    if (!response.ok) {
      throw new Error(`Не удалось загрузить базу данных: ${response.status}`);
    }

    const data = await response.json();

    const product = data.products[productId];

    if (!product) {
      throw new Error("Товар с таким ID не найден в db.json");
    }

    document.getElementById("img").src = product.img;
    document.getElementById("title").textContent = product.title;
    document.getElementById("article").textContent = `Артикул: ${product.article}`;
    document.getElementById("price").textContent = `${product.price} с`;
    document.getElementById("stock").textContent = product.stock;
    document.getElementById("colors").textContent = product.colors;
    document.getElementById("memory").textContent = product.memory;
    document.getElementById("model").textContent = product.model;

  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    document.getElementById("title").textContent = "Не удалось загрузить данные о товаре";
  }
}