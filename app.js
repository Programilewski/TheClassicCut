const galleryImages = document.querySelectorAll(".carousell__image");
const defaultWidth = 20;
const orderArray = [];
galleryImages.forEach((item, index) => orderArray.push(index));
console.log(orderArray);

galleryImages.forEach(
  (image, index) => (image.dataset.order = orderArray[index])
);

const moveItems = () => {
  const removedElement = orderArray.shift();
  orderArray.push(removedElement);
  console.log(orderArray);
  galleryImages.forEach(
    (image, index) => (image.dataset.order = orderArray[index])
  );
  galleryImages.forEach((image) => {
    image.style.opacity = 0;
    switch (parseInt(image.dataset.order)) {
      case 0:
        image.style.transform = "translateX(175%) scale(0.75)";
        image.style.opacity = 0;
        break;
      case 1:
        image.style.transform = "translateX(-100%) scale(0.75)";
        image.style.zIndex = 1;
        image.style.filter = "brightness(0.1)";
        image.style.opacity = 1;
        break;
      case 2:
        image.style.transform = "translateX(-50%) scale(1)";
        image.style.zIndex = 2;
        image.style.filter = "brightness(0.4)";
        image.style.opacity = 1;
        break;
      case 3:
        image.style.transform = "translateX(0) scale(1.5)";
        image.style.zIndex = 3;
        image.style.filter = "brightness(1)";
        image.style.opacity = 1;
        break;
      case 4:
        image.style.transform = "translateX(50%) scale(1)";
        image.style.zIndex = 2;
        image.style.filter = "brightness(.4)";
        image.style.opacity = 1;
        break;
      case 5:
        image.style.transform = "translateX(100%) scale(0.75)";
        image.style.zIndex = 1;
        image.style.filter = "brightness(.1)";
        image.style.opacity = 1;
        break;
    }
  });
};
