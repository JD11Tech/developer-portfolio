console.log("javascript is connected")

const nav = document.querySelector("nav")
console.log(nav);

nav.addEventListener("click", function () {
  console.log("Navigation clicked!")
});

const navLinks = document.querySelectorAll("nav a");
console.log(navLinks);

navLinks.forEach(function (link) {
  link.addEventListener("click", function() {
    console.log("you clicked:", link.textContent);
    navLinks.forEach(function (item){
      item.classList.remove('active');
    });
    link.classList.add("active");
  });
  });

