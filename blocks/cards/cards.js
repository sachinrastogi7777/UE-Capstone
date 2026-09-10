import { createOptimizedPicture } from "../../scripts/aem.js";
import { moveInstrumentation } from "../../scripts/scripts.js";

export default function decorate(block) {
  const ul = document.createElement("ul");
  [...block.children].forEach((row) => {
    const li = document.createElement("li");
    moveInstrumentation(row, li);
    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }
    [...li.children].forEach((div, index) => {
      if (div.querySelector("picture")) {
        div.className = "cards-card-image";
      } else if (index === 1) {
        div.className = "cards-card-eyebrow";
      } else if (index === 2) {
        div.className = "cards-card-title";
      } else if (index === 3) {
        div.className = "cards-card-description";
      } else if (index === 4) {
        div.className = "cards-card-link-label";
      } else if (index === 5) {
        div.className = "cards-card-link-url";
      }
    });
    ul.append(li);
  });

  ul.querySelectorAll("picture > img").forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [
      { width: "750" },
    ]);
    moveInstrumentation(img, optimizedPic.querySelector("img"));
    img.closest("picture").replaceWith(optimizedPic);
  });
  block.replaceChildren(ul);
}
