const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      //   console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.5 }
);
const hiddenElem = document.querySelectorAll(".hidden");
hiddenElem.forEach((el) => observer.observe(el));
