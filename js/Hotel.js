const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", ()=>{
  navLinks.classList.toggle("open")

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen?"fa-solid fa-xmark":"fa-solid fa-bars")
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-xmark");
});


const scrollRevealOpton = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal("header_container p",{
 ...scrollRevealOpton,
});

ScrollReveal().reveal("header_container h1",{
 ...scrollRevealOpton,
 delay: 500,
});

ScrollReveal().reveal(".about_image img",{
 ...scrollRevealOpton,
 origin:"left",
});

ScrollReveal().reveal(".about_content .section_subheader",{
  ...scrollRevealOpton,
  delay: 1000,
 });

ScrollReveal().reveal(".about_content .section_header",{
 ...scrollRevealOpton,
 delay: 1000,
});

ScrollReveal().reveal(".about_content .section_description",{
  ...scrollRevealOpton,
  delay: 1500,
 });

 ScrollReveal().reveal(".about_btn",{
  ...scrollRevealOpton,
  origin: 2000,
 });

 ScrollReveal().reveal(".room_card",{
  ...scrollRevealOpton,
  interval: 500,
 });


 ScrollReveal().reveal(".service_list li",{
  ...scrollRevealOpton,
  interval: 500,
  origin:"right",
 });


const targets = document.querySelectorAll('.counter');

// Function to initialize counter for each target
function initialize() {
    targets.forEach((target) => {
        let count = 0;
        let isCounting = false;

        const updateCounter = () => {
            const targetNumber = parseInt(target.dataset.target);
            target.textContent = count;

            if (count < targetNumber) {
                count++;
                requestAnimationFrame(updateCounter);
            }
        };

        const onScroll = () => {
            const targetTop = target.getBoundingClientRect().top;
            const targetBottom = target.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (targetTop < windowHeight && targetBottom >= 0 && !isCounting) {
                isCounting = true;
                requestAnimationFrame(updateCounter);
            }
        };

        window.addEventListener('scroll', onScroll, false);
        window.addEventListener('load', onScroll, false);
    });
}

// Call initialization function
initialize();