document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  //Extracting and Adding click event of HEADER of accordion
  for (let index = 0; index < accordionHeaders.length; index++) {
    const element = accordionHeaders[index];

    element.addEventListener("click", () => {
      const accordionContent = element.nextElementSibling;

      //Seting and Removing the '.active' class on each elements
      if (accordionContent.classList.contains("active")) {
        accordionContent.classList.remove("active");
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.classList.add("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }
});
