import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata("footer");
  const footerPath = footerMeta
    ? new URL(footerMeta, window.location).pathname
    : "/footer";

  const fragment = await loadFragment(footerPath);
  block.textContent = "";
  const footer = document.createElement("div");
  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }
  footer.classList.add("footer-content");
  const brandSection = footer.querySelector(".section:first-child");
  if (brandSection) {
    const logo = brandSection.querySelector("picture");
    const title = brandSection.querySelector("h3");

    if (logo && title) {
      title.prepend(logo);
      title.classList.add("footer-brand");
    }
  }
  block.append(footer);
}
