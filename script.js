// Smooth scrolling to sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  // Toggle service details
  function showDetails(id) {
    const detail = document.getElementById(id);
    if (detail) {
      detail.classList.toggle("hidden"); // Toggle the 'hidden' class
    }
  }
  
  // Example: Add dynamic content to the hero button
  /*
  document.querySelector("#hero button").addEventListener("click", () => {
    alert("Explore our services to transform your business!");
  });
  */
  