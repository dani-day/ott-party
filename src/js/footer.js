// footer 숏컷 그룹
let footerShortcut = document.querySelectorAll(".shortcut__btn");
let shorthCutList = document.querySelectorAll(".shortcut__group");

// 버튼 클릭시 클릭한 버튼 제외 닫기
footerShortcut.forEach((e, i)=> {
  e.addEventListener("click", ()=> {
    if (shorthCutList[i].classList.contains("is--active")) {
      shorthCutList[i].classList.remove("is--active");
    } else {
      shorthCutList.forEach((j, k)=> {
        if (k === i) {
          j.classList.add("is--active");
        } else {
          j.classList.remove("is--active");
        }
      });
    }
  });
});
// 버튼과 숏컷 그룹을 제외한 나머지 영역 클릭시 닫기
document.addEventListener("click", (e)=>{
  let isBtn = e.target.classList.contains("shortcut__btn");
  let isGroup = e.target.classList.contains("shortcut__group");

  if (!isBtn && !isGroup) {
    shorthCutList.forEach(function(e) {
      e.classList.remove("is--active");
    });
  }
});

// 슬라이드
let roller = document.querySelector('.look__wrap .look__rolling__list');
roller.id = 'roller1';
let clone = roller.cloneNode(true);
clone.id = 'roller2';
document.querySelector('.look__wrap').appendChild(clone);
document.querySelector('#roller1').style.left = '20px';
document.querySelector('#roller2').style.left = document.querySelector('.look__wrap .look__rolling__list ul').offsetWidth + 'px';
roller.classList.add('originalScr');
clone.classList.add('clone');


let coppy = document.querySelector('.look__coppy .look__rolling__list');
coppy.id = 'coppy1';
let cut = coppy.cloneNode(true);
cut.id = 'coppy2';
document.querySelector('.look__coppy').appendChild(cut);
document.querySelector('#coppy1').style.left = '20px';
document.querySelector('#coppy2').style.left = document.querySelector('.look__wrap .look__rolling__list ul').offsetWidth + 'px';
coppy.classList.add('coppyScr');
cut.classList.add('cut');
