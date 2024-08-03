const lsReviewsKey = "productsReviews";

function getReviews() {
  const reviews = localStorage.getItem(lsReviewsKey);
  if (!reviews) return [];
  return JSON.parse(reviews);
}

function addReview(productName, review) {
  const reviews = getReviews();
  const index = reviews.findIndex(
    (product) => product.productName === productName
  );
  if (index >= 0) {
    reviews[index].reviewsArray.push(review);
  } else {
    const reviewsArray = [];
    reviewsArray.push(review);
    reviews.push({ productName, reviewsArray });
  }
  localStorage.setItem(lsReviewsKey, JSON.stringify(reviews));
}

function deleteReview(productName, review) {
  const reviews = getReviews();
  for (let i = 0; i < reviews.length; i++) {
    for (let j = 0; j < reviews[i].reviewsArray.length; j++) {
      if (
        reviews[i].productName === productName &&
        reviews[i].reviewsArray[j] === review
      )
        reviews[i].reviewsArray.splice(j, 1);
    }
  }
  localStorage.setItem(lsReviewsKey, JSON.stringify(reviews));
}
