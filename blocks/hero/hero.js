export default function decorate(block) {
  const rows = [...block.children];
  const image = rows[0]?.querySelector("picture");
  const eyebrow = rows[1]?.textContent.trim();
  const heading = rows[2]?.textContent.trim();
  const description = rows[3]?.textContent.trim();
  const cta1Text = rows[4]?.textContent.trim();
  const cta1Link = rows[5]?.querySelector("a")?.getAttribute("href") || "#";
  const cta2Text = rows[6]?.textContent.trim();
  const cta2Link = rows[7]?.querySelector("a")?.getAttribute("href") || "#";

  block.innerHTML = "";
  const heroContent = document.createElement("div");
  heroContent.className = "hero-content";
  heroContent.innerHTML = `
    <div class="hero-eyebrow">${eyebrow}</div>
    <h1 class="hero-title">
      ${heading}
    </h1>
    <p class="hero-description">
      ${description}
    </p>
    <div class="hero-actions">
      <a class="hero-btn" href="${cta1Link}">
        ${cta1Text}
      </a>
      <a class="hero-btn" href="${cta2Link}">
        ${cta2Text}
      </a>
    </div>`;

  if (image) {
    image.classList.add("hero-background");
    block.append(image);
  }
  block.append(heroContent);
}
