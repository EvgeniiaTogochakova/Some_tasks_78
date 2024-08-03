const containerEl = document.querySelector("div.container");
const productNameEl = containerEl.querySelector("input.productName");
const reviewEl = containerEl.querySelector("textarea.review");
const addReviewEl = containerEl.querySelector("button.addReview");
addReviewEl.addEventListener("click", () => {
  addReviewEl.disabled = true;
  if (productNameEl.value === "" || reviewEl.value === "") return;
  if (reviewEl.value.trim().length < 30 || reviewEl.value.trim().length > 300) {
    addReviewEl.disabled = true;
    containerEl.insertAdjacentHTML(
      "beforeend",
      `<p class="warning">В отзыве допускается от 30 до 300 символов, у вас ${
        reviewEl.value.trim().length
      }<p>`
    );

    setTimeout(() => {
      containerEl.removeChild(containerEl.querySelector("p.warning"));
      addReviewEl.disabled = false;
    }, 2000);

    return;
  }

  addReview(productNameEl.value, reviewEl.value);

  containerEl.insertAdjacentHTML(
    "beforeend",
    `<p class="info">Ваш отзыв добавлен<p>`
  );
  setTimeout(() => {
    addReviewEl.disabled = false;
    containerEl.removeChild(containerEl.querySelector("p.info"));
    productNameEl.value = "";
    reviewEl.value = "";
  }, 3000);
});
