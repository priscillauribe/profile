document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".portfolio-item");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
      currentIndex = 0;
    }

    carouselItems.forEach((item, i) => {
      if (i === currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  showSlide(currentIndex);

  prevButton.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
  });
});
