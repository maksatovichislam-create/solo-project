const id = new URLSearchParams(window.location.search).get("id");

if (id === "iphone") {
  document.getElementById("img").src = "https://avatars.mds.yandex.net/i?id=adeb0feb05ec9b465db75e66024f3f6c220732a6-5875590-images-thumbs&n=137";
  document.getElementById("title").textContent = "iPhone 17 Pro Max";
  document.getElementById("article").textContent = "Артикул: MFXH4 (E-Sim)";
  document.getElementById("price").textContent = "142 000 с";
  document.getElementById("stock").textContent = "В наличии";
  document.getElementById("colors").textContent = "Оранжевый, Серый, Тёмно-синий";
  document.getElementById("memory").textContent = "256GB, 512GB, 1TB, 2TB";
  document.getElementById("model").textContent = "eSIM + eSIM или nanoSIM + eSIM";
}

if (id === "ipad") {
  document.getElementById("img").src = "https://avatars.mds.yandex.net/i?id=9f0f18f4b1e9724a3803b301b0dd4365a40e6cad-9203641-images-thumbs&n=137";
  document.getElementById("title").textContent = "iPad Pro";
  document.getElementById("article").textContent = "Артикул: IPD2026";
  document.getElementById("price").textContent = "128 000 с";
  document.getElementById("stock").textContent = "В наличии";
  document.getElementById("colors").textContent = "Серебристый, Космический серый";
  document.getElementById("memory").textContent = "256GB, 512GB, 1TB";
  document.getElementById("model").textContent = "Wi-Fi или Wi-Fi + Cellular";
}
if (id === "mac") {
  document.getElementById("img").src = "https://avatars.mds.yandex.net/i?id=4f0b9789bad83ebf6cb87b88b0b6fd337ff32e4b-8485986-images-thumbs&n=137";
  document.getElementById("title").textContent = "MacBook Pro";
  document.getElementById("article").textContent = "Артикул: MFXH4 (E-Sim)";
  document.getElementById("price").textContent = "128 000 с";
  document.getElementById("stock").textContent = "В наличии";
  document.getElementById("colors").textContent = "Серебристый, Космический серый";
  document.getElementById("memory").textContent = "256GB, 512GB, 1TB";
  document.getElementById("model").textContent = "Wi-Fi или Wi-Fi + Cellular";
}
if (id === "apple-watch") {
  document.getElementById("img").src = "https://avatars.mds.yandex.net/i?id=89af58f625aa130d0d43eaf9f7043871258e55f0-5679382-images-thumbs&n=137";
  document.getElementById("title").textContent = "Apple Watch";
  document.getElementById("article").textContent = "Артикул: AW2026";
  document.getElementById("price").textContent = "60 000 с";
  document.getElementById("stock").textContent = "В наличии";
  document.getElementById("colors").textContent = "Серебристый, Космический серый";
  document.getElementById("memory").textContent = "256GB, 512GB, 1TB";
  document.getElementById("model").textContent = "Wi-Fi или Wi-Fi + Cellular";
}
