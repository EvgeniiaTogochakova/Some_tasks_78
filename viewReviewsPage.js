const reviews = getReviews();
const reviewsEl = document.querySelector("div.reviews");

render(reviews);
const h2Els = document.querySelectorAll("h2.productName");

h2Els.forEach((product) => {
  product.addEventListener("click", () => {
    showingReviews(product);
  });
});

buttonEls = document.querySelectorAll("button.delete");
buttonEls.forEach((button) => {
  button.addEventListener("click", () => {
    const closestDiv = button.closest("div.wrapper");
    const reviewToDelete = closestDiv.querySelector(".review").textContent;
    const productName = findProductName(closestDiv);
    deleteReview(productName, reviewToDelete);
    closestDiv.remove();
  });
});

function render(array) {
  for (let i = 0; i < array.length; i++) {
    reviewsEl.insertAdjacentHTML(
      "beforeend",
      `
        <h2 class="productName">${array[i].productName}</h2>
      `
    );
  }

  const h2Els = document.querySelectorAll("h2.productName");

  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array[index].reviewsArray.length; j++) {
      h2Els[index].insertAdjacentHTML(
        "afterend",
        `
        <div class="wrapper invisible">
        <span class="review">${array[index].reviewsArray[j]}</span>
        <button class="delete">Удалить отзыв</button>
        </div>
        `
      );
    }
  }
}

function showingReviews(h2) {
  const nextElement = h2.nextElementSibling;
  if (!nextElement) return;
  if (nextElement.classList.contains("productName")) return;
  nextElement.classList.add("visible");
  showingReviews(nextElement);
}

function findProductName(div) {
  const previousElement = div.previousElementSibling;
  if (previousElement.classList.contains("productName")) {
    return previousElement.textContent;
  }
  return findProductName(previousElement);
}
