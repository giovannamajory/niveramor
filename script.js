let music;

window.onload = () => {
  music = new Audio("music/clocks.mp3");
};

/* START */
function startExperience() {
  if (music) {
    music.volume = 0.4;

    music.play().catch((e) => {
      console.log("Erro ao tocar música:", e);
    });
  }

  const intro = document.getElementById("intro");
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
}

/* FADE */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

/* AUTO SCROLL */
let auto = false;
let interval;

function toggleAutoScroll() {
  auto = !auto;

  if (auto) {
    interval = setInterval(() => {
      window.scrollBy(0, 1);
    }, 20);
  } else {
    clearInterval(interval);
  }
}

/* PARTICULAS */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.y -= p.speed;
    if (p.y < 0) p.y = canvas.height;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(167,139,250,0.6)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();