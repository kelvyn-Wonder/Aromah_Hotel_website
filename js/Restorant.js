const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", ()=>{
  navLinks.classList.toggle("open")

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen?"fa-solid fa-xmark":"fa-solid fa-bars")
});


const scrollRevealOpton = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".about_image img",{
  ...scrollRevealOpton,
  origin:"left",
 });

 ScrollReveal().reveal(".about_content .section_subheader",{
  ...scrollRevealOpton,
  delay: 500,
 }); 

 ScrollReveal().reveal(".about_content .section_header",{
  ...scrollRevealOpton,
  delay: 1000,
 });

 ScrollReveal().reveal(".about_content .section_description",{
  ...scrollRevealOpton,
  delay: 1000,
 });
 ScrollReveal().reveal(".about_btn",{
  ...scrollRevealOpton,
  origin: 1500,
 });
 
 ScrollReveal().reveal(".food_container .food_item",{
  ...scrollRevealOpton,
  interval: 500,
 });

 ScrollReveal().reveal(".delivery_content",{
  ...scrollRevealOpton,
  interval: 700,
 });
 
 ScrollReveal().reveal(".delivery_image",{
  ...scrollRevealOpton,
  origin:"left",
 });

 ScrollReveal().reveal(".delivery_form",{
  ...scrollRevealOpton,
  delay: 1000,
 });

 ScrollReveal().reveal(".section_subheader",{
  ...scrollRevealOpton,
  delay: 500,
 });

 ScrollReveal().reveal(".image_container .first_image",{
  ...scrollRevealOpton,
  delay: 500,
 });
 ScrollReveal().reveal(".image_container .second_image",{
  ...scrollRevealOpton,
  delay: 1000,
 });
 ScrollReveal().reveal(".image_container .Third_image",{
  ...scrollRevealOpton,
  delay: 1500,
 });
 ScrollReveal().reveal(".worker .worker_image .first_image",{
  ...scrollRevealOpton,
  delay: 500,
 });
 ScrollReveal().reveal(".worker .worker_image .second_image",{
  ...scrollRevealOpton,
  delay: 1000,
 });
 ScrollReveal().reveal(".worker .worker_image .Third_image",{
  ...scrollRevealOpton,
  delay: 1500,
 });
