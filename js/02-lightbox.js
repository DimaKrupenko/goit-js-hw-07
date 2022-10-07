import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const itemEl = galleryItems
  .map(
    (item) =>
      //   `<div class="gallery__item">
      //         <a class="gallery__link" href=${item.original} onclick="return false;">
      //         <img class="gallery__image" src=${item.preview} data-source=${item.original} alt='${item.description}'></a>
      //     </div> `
      `<div class="gallery__item">
    <a class="gallery__link" href=${item.original} onclick="return false;">
    <img class="gallery__image" src=${item.preview} alt='${item.description}' title='${item.description}'/></a>
    
</div>
          `
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", itemEl);
gallery.addEventListener("click", onClickPicture);

function onClickPicture(evt) {
  //   var lightbox = new SimpleLightbox(".gallery__item a", {});
  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {
    // do something…
  });

  gallery.on("error.simplelightbox", function (e) {
    console.log(e); // some usefull information
  });
}
