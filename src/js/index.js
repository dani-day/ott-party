// 모바일 크기일때 유저 정보 클릭
// 모달창 오버레이 뒤쪽 클릭 제어

// 검색 모달창
let searchBtn = document.querySelector(".search__button");
let searchPop = document.querySelector(".search");
let header = document.querySelector(".header")

// 검색 모달창 스크롤 제어
const openModal = (e) => {
  document.body.style.overflow = "hidden";
};
 const closeModal = (e) => {
    document.body.style.overflow = "unset";
 };
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("is--active");
  searchPop.classList.toggle("is--active");
  header.classList.toggle("is--active")
  if (searchPop.classList.length == 2) {
    openModal();
  } else closeModal();
})

// 실시간 인기 검색어 날짜
let dateEl = document.querySelector(".search__date");
let timeEl = document.querySelector(".search__time");
let today = new Date();
dateEl.innerHTML = today.toLocaleDateString();
timeEl.innerHTML = today.toLocaleTimeString();


// 캐러셀
let imgArr = ["./images/banner01__header.png","./images/banner02__header.png","./images/banner03__header.png","./images/banner04__header.png"];
let shortcut = document.querySelectorAll(".banner__shorcut");
let subtext = document.querySelector(".banner__subtext");
let subtextArr = ["리얼 초밀착 법정 드라마", "짜릿한 공조 사기극", "괴이한 소문의 실체가 공개된다.", "UFC 패더급매치 에멧 vs 토푸리아"];
let prev = document.querySelector(".banner__prev");
let next = document.querySelector(".banner__next");
let banner = document.querySelector(".banner__image");
let play = document.querySelector(".banner__play__btn");
let stop = document.querySelector(".banner__stop__btn");


let imgNum = 0;

// 캐러셀 버튼 조작
prev.addEventListener('click', () => {
  imgNum = (imgNum - 1 + imgArr.length) % imgArr.length;
  banner.setAttribute('src', imgArr[imgNum]);
  shortcut.forEach(e => e.classList.remove("is--active"));
  shortcut[imgNum].classList.add("is--active");
  subtext.innerHTML = subtextArr[imgNum]
});
next.addEventListener('click', () => {
  imgNum = (imgNum + 1) % imgArr.length;
  banner.setAttribute('src', imgArr[imgNum]);
  shortcut.forEach(e => e.classList.remove("is--active"));
  shortcut[imgNum].classList.add("is--active");
  subtext.innerHTML = subtextArr[imgNum]
});
// 캐러셀 숏컷
shortcut.forEach((e,n) => {
  e.addEventListener("click", ()=>{
    shortcut.forEach(e => e.classList.remove("is--active"));
    e.classList.add("is--active");
    banner.setAttribute('src', imgArr[n]);
    subtext.innerHTML = subtextArr[n];
  })
})
// 캐러셀 중지
play.addEventListener("click", ()=>{
  play.classList.add("is--active");
  stop.classList.add("is--active")
  clearInterval(autoBanner);
})
// 캐러셀 재시작
stop.addEventListener("click", ()=>{
  play.classList.remove("is--active");
  stop.classList.remove("is--active");
  autoBanner = setInterval(()=>{
    imgNum++;
    if(imgNum == 4) {
      imgNum = 0;
    }
    banner.setAttribute('src', imgArr[imgNum]);
    shortcut.forEach(e => e.classList.remove("is--active"));
    shortcut[imgNum].classList.add("is--active");
    subtext.innerHTML = subtextArr[imgNum]
  },5000)
})
// 캐러샐 자동
let autoBanner = setInterval(()=>{
  imgNum++;
  if(imgNum == 4) {
    imgNum = 0;
  }
  banner.setAttribute('src', imgArr[imgNum]);
  shortcut.forEach(e => e.classList.remove("is--active"));
  shortcut[imgNum].classList.add("is--active");
  subtext.innerHTML = subtextArr[imgNum]
},5000)