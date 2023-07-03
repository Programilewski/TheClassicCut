const galleryImages = document.querySelectorAll(".carousell__image");
const navDark = document.querySelector(".nav--bg-dark");

// Make navigation dark when scrolled down
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY < 50) {
    navDark.style.backgroundColor = "rgba(0,0,0,0.25)";
    navDark.style.borderBottom = "none";
  } else {
    navDark.style.backgroundColor = "rgb(40, 34, 33)";
    navDark.style.borderBottom = "1px solid #EB9B64";
  }
});

//Create the array of the order for the rotation
const orderArray = [];
galleryImages.forEach((item, index) => orderArray.push(index));
console.log(orderArray);

// Apply the array of the order to the actual images
galleryImages.forEach(
  (image, index) => (image.dataset.order = orderArray[index])
);

//Move the items
const moveItems = (direction) => {
  // Switch the places of the images based on the order
  if (direction === "left") {
    galleryImages.forEach((image) => {
      image.style.opacity = 0;
      switch (parseInt(image.dataset.order)) {
        case 0:
          image.style.transform = "translateX(100%) scale(0.75)";
          image.style.opacity = 0;
          image.zIndex = 1;
          break;
        case 1:
          image.style.transform = "translateX(-100%) scale(0.75)";
          image.style.zIndex = 2;
          image.style.filter = "brightness(0.1)";
          image.style.opacity = 1;
          break;
        case 2:
          image.style.transform = "translateX(-50%) scale(1)";
          image.style.zIndex = 3;
          image.style.filter = "brightness(0.4)";
          image.style.opacity = 1;
          break;
        case 3:
          image.style.transform = "translateX(0) scale(1.5)";
          image.style.zIndex = 4;
          image.style.filter = "brightness(1)";
          image.style.opacity = 1;
          break;
        case 4:
          image.style.transform = "translateX(50%) scale(1)";
          image.style.zIndex = 3;
          image.style.filter = "brightness(.4)";
          image.style.opacity = 1;
          break;
        case 5:
          image.style.transform = "translateX(100%) scale(0.75)";
          image.style.zIndex = 2;
          image.style.filter = "brightness(.1)";
          image.style.opacity = 1;
          break;
        default:
          image.style.transform = "translateX(100%) scale(0.75)";
          image.style.opacity = 0;
          image.zIndex = 1;
      }
    });
  } else if (direction === "right") {
    galleryImages.forEach((image) => {
      image.style.opacity = 0;
      switch (parseInt(image.dataset.order)) {
        case 0:
          image.style.transform = "translateX(-50%) scale(1)";
          image.style.opacity = 1;
          image.style.filter = "brightness(.4)";
          image.style.zIndex = 3;
          break;
        case 1:
          image.style.zIndex = 4;
          image.style.transform = "translateX(0%) scale(1.5)";
          image.style.filter = "brightness(1)";
          image.style.opacity = 1;
          break;
        case 2:
          image.style.zIndex = 3;
          image.style.transform = "translateX(50%) scale(1)";
          image.style.filter = "brightness(0.4)";
          image.style.opacity = 1;
          break;
        case 3:
          image.style.zIndex = 2;
          image.style.transform = "translateX(100%) scale(0.75)";
          image.style.filter = "brightness(.1)";
          image.style.opacity = 1;
          break;
        case 4:
          image.style.zIndex = 3;
          image.style.transform = "translateX(100%) scale(0.75)";
          image.style.filter = "brightness(.4)";
          image.style.opacity = 0;
          break;
        case 5:
          image.style.zIndex = 2;
          image.style.transform = "translateX(-100%) scale(0.75)";
          image.style.filter = "brightness(.1)";
          image.style.opacity = 1;
          break;
        default:
          image.style.transform = "translateX(100%) scale(0.75)";
          image.style.opacity = 0;
          image.zIndex = 1;
      }
    });
  }
  // Rotate the array
  if (direction === "right") {
    const removedElement = orderArray.shift();
    orderArray.push(removedElement);
  }
  if (direction === "left") {
    const removedElement = orderArray.pop();
    orderArray.unshift(removedElement);
  }

  // Set the order of the array
  galleryImages.forEach(
    (image, index) => (image.dataset.order = orderArray[index])
  );
};

document.querySelector(".carousell__left").addEventListener("click", () => {
  moveItems("left");
});

document.querySelector(".carousell__right").addEventListener("click", () => {
  moveItems("right");
});
