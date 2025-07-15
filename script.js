let flipPage1 = document.querySelector(".flip-page");
let buttonNext = document.querySelector(".flip-btn");
let flipPage2 = document.querySelector(".container .book .flip-page2");
let buttonNext2 = document.querySelector(".flip-btn2");
let flipPage3 = document.querySelector(".flip-page3");
let buttonBack = document.querySelector(".flip-btn1");
let buttonBack1 = document.querySelector(".flip-btn3");


// page 2 to page 3

buttonNext.addEventListener("click", () => {
  flipPage1.classList.add("flipped");
  setTimeout(() => {
    flipPage2.classList.add("flip");
  }, 1100);
});

// page 3 to page 2

buttonBack.addEventListener("click", () => {
  document.querySelector(".flip-page").classList.remove("flipped");
  setTimeout(() => {
    flipPage2.classList.remove("flip");
  }, 1000);
});

// page 4 to page 5

buttonNext2.addEventListener("click", () => {
  flipPage2.classList.add("flipped1");
  setTimeout(() => {
    flipPage3.classList.add("flip2");
  }, 1000);
});

// page 5 to page 4

buttonBack1.addEventListener("click", () => {
  document.querySelector(".flip-page2").classList.remove("flipped1")
  setTimeout(() => {
    flipPage3.classList.remove("flip2");
  },1000)

});

// Progress Bar

document.querySelectorAll('.skill').forEach(skill => {
  const percent = skill.dataset.percent;
  const ring = skill.querySelector('.progress-ring::before');

  skill.style.setProperty('--percent', percent);
});


