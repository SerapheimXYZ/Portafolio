// Get navigation items
const links = document.querySelectorAll(".nav-button");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the section name from the text content
    const sectionName =
      link.textContent?.toLowerCase().replace(/\s+/g, "") || "";
    const section = document.querySelector(`#${sectionName}`);

    if (section) {
      const headerHeight = 94;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const copyButton = document.querySelector(".copy-button");
const textToCopy = "alejomu20070@gmail.com";

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    console.log("Texto copiado");
  } catch (err) {
    console.error("Error al copiar:", err);
  }
});
