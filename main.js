gsap.registerPlugin(ScrollTrigger);
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".model-menu");
const btnClose = document.querySelector(".btn-close");
const header = document.querySelector("header");
const tl = gsap.timeline({ paused: true });
tl.to(".logo", { scale: 0, duration: 0.5, transformOrigin: "left center" }).to(
  "header",
  { top: "-155px" },
  "<",
);
const vh = window.innerHeight;
ScrollTrigger.create({
  start: "top -80",
  onUpdate: (self) => {
    if (self.direction === 1) {
      tl.play();
    } else {
      tl.reverse();
      if (scrollY > vh) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }
  },
});
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  //   tl.to(".deco-connect", { scale: 1, duration: 5, ease: "power2.inOut" });
});
btnClose.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const stickyItems = document.querySelectorAll(".sticky-container .item");
function isInMiddle(el) {
  const rect = el.getBoundingClientRect();
  const middle = vh / 2;
  return rect.top <= middle && rect.bottom >= middle;
}
const pinSpacer = document.querySelector(".right-col img");
function changeImageSticky(url) {
  pinSpacer.src = url;
}
function handleSticky() {
  stickyItems.forEach((el, index) => {
    if (isInMiddle(el)) {
      const previousElement = el.previousElementSibling;
      if (previousElement) {
        previousElement.style.opacity = 0.4;
      }
      el.style.opacity = 1;
      document.querySelector(".active-item-index-text").innerText = index + 1;

      changeImageSticky(el.dataset.src);
    }
  });
}
window.addEventListener("scroll", () => {
  handleSticky();
});

gsap.to(".banner-img", {
  y: 600, // banner kéo lên 100px
  ease: "none",
  scrollTrigger: {
    trigger: ".banner-img",
    start: "top top",
    end: "+=1200",
    scrub: true,
  },
});

function getRotate(el) {
  const style = window.getComputedStyle(el);
  const matrix = style.transform;

  if (matrix === "none") return 0;

  const values = matrix.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];

  const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  return angle;
}
// Section 5
const buttons = document.querySelectorAll(".pagination-btn");
const swiperContainer = document.querySelector(".swiper-container");
buttons.forEach((btn, index) => {
  const imgElement = btn.querySelector("img");
  btn.addEventListener("click", function () {
    const buttonActive = document.querySelector(".pagination-btn.active");
    buttonActive.classList.remove("active");
    buttonActive.querySelector("img").src =
      "https://amigroup.com.vn/wp-content/uploads/2025/06/logo-investment-blue.svg";
    const style = getComputedStyle(btn);
    const rotate = style.rotate;
    imgElement.src =
      "	https://amigroup.com.vn/wp-content/uploads/2025/06/logo-training-white.svg";
    btn.classList.add("active");
    swiperContainer.style.rotate = `calc(${rotate} + 145deg)`;

    // bỏ active cũ
    document.querySelectorAll(".pagination-btn").forEach((b) => {});

    // thêm active mới
    this.classList.add("pagination-btn-active");
  });
});
