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
const image = document.querySelector(".image-container .image");
buttons.forEach((btn, index) => {
  const imgElement = btn.querySelector("img");
  btn.addEventListener("click", function () {
    image.src = btn.dataset.image;
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

const dataPeople = [
  {
    descripion: `WATG rất vui khi được làm việc với đội ngũ của Ami&M trong dự án độc đáo và đặc biệt này.
                Chúng tôi hy vọng sẽ được tiếp tục đồng hành cùng Ami&M trên hành trình hiện thực hóa tầm
                nhìn cũng như hỗ trợ Ami&M ở những bước triển khai dự án tiếp theo. Nó hoàn toàn khác biệt
                so với hầu hết các dự án của WATG đã từng thực hiện, điều này khiến công việc trở nên thú vị hơn
                và chúng tôi đã được truyền cảm hứng rất nhiều từ các bạn.`,
    name: "Ông Robert Day",
    role: "Nguyên Giám đốc điều hành khu vực Châu Á - Thái Bình Dương, WATG",
    image:
      "https://amigroup.com.vn/wp-content/uploads/2024/09/Doi-tac_WATG_avt.png",
  },
  {
    descripion: `Trải qua một năm đồng hành cùng Ami&M trong dự án chuyển đổi số, chúng tôi thực sự ấn tượng
                với phong cách làm việc chuyên nghiệp và những câu chuyện đầy cảm hứng. Không chỉ tập trung tìm
                kiếm giải pháp, Ami&M luôn thật tâm thấu hiểu và sẵn sàng chia sẻ với những thách thức của
                Đối tác, khơi gợi ý tưởng giúp Base phá vỡ giới hạn nội tại, tạo động lực cho những sáng tạo và
                câu hỏi làm thế nào để tốt hơn. `,
    name: "Bà Nguyễn Loan Anh",
    role: "Giám đốc Tư vấn chuyển đổi số Base.vn",
    image:
      "https://amigroup.com.vn/wp-content/uploads/2024/09/Doi-tac_Base_avt-1.png",
  },
  {
    descripion: `Với vai trò là Đối tác tư vấn và thiết kế cấu phần giáo dục tại The Ami Village, FAROS hân hạnh
                được đồng hành với Ami&M từ những ngày rất sớm. Chúng tôi cảm nhận được niềm say sưa của
                Ami&M dành cho giáo dục, trân quý sự đầu tư và làm việc nghiêm túc của các bạn để kiến tạo
                nên một không gian kết nối, trân trọng thiên nhiên như trân trọng gia đình và những mối dây
                thương yêu mà chúng ta được ban tặng trong đời. `,
    name: "Bà Nguyễn Thúy Uyên Phương",
    role: "Founder FAROS Education & Consulting",
    image:
      "https://amigroup.com.vn/wp-content/uploads/2024/09/Doi-tac_Faros_avt.png",
  },
  {
    descripion: `Hành trình hợp tác của Ami&M và RMA hướng tới việc phát triển và làm mới thương
     hiệu Ami&M với chiến lược hình ảnh mới mẻ và bám sát tinh thần của Tập đoàn ở 
     thời điểm hiện tại. Trong quá trình làm việc, tôi thấy được tinh thần kiên 
     định và chuyên nghiệp của đội ngũ Ami&M. Tôi phải nói rằng sự hợp tác công việc
      của chúng ta thật “khó khăn” và tuyệt vời. “Khó khăn” bởi vì không hề có giới 
      hạn về lượng thông tin mà Ami&M cung cấp cho chúng tôi, cũng như không giới 
      hạn lượng thời gian chia sẻ mà các bạn dành cho chúng tôi. Tuyệt vời bởi từ 
      những chia sẻ của các bạn, chúng tôi học được cách để hình thành và chia sẻ 
      những ý tưởng. Chúng tôi nhận thấy Ami&M có thái độ làm việc rất cởi mở và 
      sẵn sàng kết hợp các ý tưởng của chúng tôi với ý tưởng nội bộ của các bạn.
       Trong suốt các cuộc thảo luận sôi nổi giữa chúng ta, tôi cảm nhận rõ ràng
        năng lượng và tinh thần đáng ngưỡng mộ của việc “Làm thế nào để tốt hơn?”
           – một tinh thần luôn hướng tới điều tốt nhất trong từng bước đi.`,
    name: "Ông Richard Moore",
    role: "Chủ tịch Richard Moore Associates",
    image:
      "https://amigroup.com.vn/wp-content/uploads/2024/09/Doi-tac_RMA_avt.png",
  },
];

const listThumContainer = document.querySelectorAll(
  ".section-8 .content-container .thumb-container .item-container",
);
const famousContainer = document.querySelector(".famous-word-container");

listThumContainer.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".thumb-container .item-container.active")
      .classList.remove("active");
    famousContainer.querySelector("h3").textContent =
      dataPeople[index].descripion;
    famousContainer.querySelector("strong").textContent =
      dataPeople[index].name;
    famousContainer.querySelector("span").textContent = dataPeople[index].role;
    const imgElement = document.querySelector(".item-preview img");
    gsap.to(imgElement, {
      opacity: 0.5,
      duration: 0.3,
      onComplete: () => {
        imgElement.src = dataPeople[index].image;
        gsap.to(imgElement, { opacity: 1, duration: 0.5 });
      },
    });
    btn.classList.add("active");
  });
});
// Section 9
const container = document.querySelector(".section-9 .item-container");
console.log(container);

let position = 0;
const speed = 0.5;

function loop() {
  position -= speed;

  if (Math.abs(position) >= container.scrollWidth / 2) {
    position = 0;
  }

  container.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(loop);
}

loop();

const lenis = new Lenis({
  duration: 1.5, // càng lớn càng delay
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// Section 10
const wrapper = document.querySelector(".card-wrapper");
const cards = document.querySelectorAll(".card");

let index = 0;
const width = cards[0].offsetWidth;

document.querySelector(".next").onclick = () => {
  if (index < cards.length - 1) {
    index++;
    wrapper.style.transform = `translateX(-${index * width}px)`;
  }
};

document.querySelector(".prev").onclick = () => {
  if (index > 0) {
    index--;
    wrapper.style.transform = `translateX(-${index * width}px)`;
  }
};
