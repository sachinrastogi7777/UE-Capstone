export default function decorate(block) {
  const rows = [...block.children];
  const image = rows[0]?.querySelector("picture");
  const heading = rows[1]?.textContent.trim() || "";
  const description = rows[2]?.innerHTML || "";
  const ctaText = rows[3]?.textContent.trim() || "";
  const ctaLink =
    rows[4]?.querySelector("a")?.href || rows[4]?.textContent.trim() || "#";
  block.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "editorial-wrapper";
  wrapper.innerHTML = `
    <div class="editorial-image"></div>
    <div class="editorial-content">
      <h2 class="editorial-title">
        ${heading}
      </h2>
      <div class="editorial-description">
        ${description}
      </div>
      <a href="${ctaLink}" class="editorial-btn">
        ${ctaText}
      </a>
    </div>`;

  if (image) {
    wrapper.querySelector(".editorial-image").append(image);
  }
  block.append(wrapper);
}
