import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const itemEl = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
            <a class="gallery__link" href=${item.original} onclick="return false;">
            <img class="gallery__image" src=${item.preview} data-source=${item.original} alt='${item.description}'></a>
        </div> `
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", itemEl);

gallery.addEventListener("click", onClickPicture);

function onClickPicture(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`

          <img src=${evt.target.dataset.source} >
  `);
  instance.show();

  window.addEventListener("keydown", onKeyPress);

  function onKeyPress(evt) {
    window.removeEventListener("keydown", onKeyPress);
    if (evt.code === "Escape") {
      instance.close();
      // const div = document.querySelector(".basicLightbox");
      // div.classList.remove("basicLightbox--visible", "basicLightbox");
    }
  }
}
