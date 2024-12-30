// Assuming you have a header with elements like this:
// <header>
//   <a href="#section1">Section 1</a>
//   <a href="#section2">Section 2</a>
//   <a href="#section3">Section 3</a>
// </header>

// Get all the header links
const headerLinks = document.querySelectorAll("header a");

// Add an event listener to each link
headerLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the href attribute
    const targetId = link.getAttribute("href");

    // Find the target section element
    const targetSection = document.querySelector(targetId);

    // Smoothly scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
