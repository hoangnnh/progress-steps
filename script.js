const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".btn#prev");
const nextBtn = document.querySelector(".btn#next");

let currentActive = 1;

const updateStep = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  })

  const actives = document.querySelectorAll('.active');
  const progressBarWidthValue = `${(actives.length - 1) / (circles.length - 1) * 100}%`
  progress.style.width = progressBarWidthValue

  if (currentActive === 1) {
    prevBtn.disabled = true
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true
  } else {
    nextBtn.disabled = false
    prevBtn.disabled = false
  }
}

nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateStep()
});

prevBtn.addEventListener("click", () => {
  currentActive--
  if(currentActive < 1) {
    currentActive = 1
  }

  updateStep()
});
