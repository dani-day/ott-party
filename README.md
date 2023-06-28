# TAING
## 🚀 Project Info

### 멋쟁이 사자처럼 프론트엔드 스쿨 6기 HTML/CSS 프로젝트

TVING 홈페이지를 기반으로 Sass를 이용해 제작한 페이지입니다.

### 🗓️ 
2023.06.23 ~ 2023.06.28

### 👩‍💻🧑‍💻 

김다연: 메인페이지(맡은 부분 작성하기) <br>
신명화: 메인페이지(맡은 부분 작성하기) <br>
유동균: 메인페이지(맡은 부분 작성하기) <br>
조수연: 메인페이지(맡은 부분 작성하기) <br>

<br>

## 💻 Stack
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">

<br>

## 📚 Project GuideLine

### 웹 표준 마크업 & 스타일링
- 적절한 헤딩 사용 및 시맨틱 마크업에 신경써 주세요.
예 - 버튼 기능을 하는 UI를 마크업 할 때 <div> 등 가급적 의미없는 요소를 사용하지 마세요.
다만 <div> 요소를 사용하지 말라는 의미가 아닙니다.
- 유효성 검증을 통해 문법 오류가 발생하지 않도록 구현해야 합니다.
- 페이지 단위로 구현해주세요. (컴포넌트 단위 구현은 React 프로젝트에서 진행됩니다.)
- 스타일 작성 시, CSS를 사용하거나 [Sass](https://sass-lang.com/) 등 프리프로세서 기술 중 자유롭게 선태학여 사용하시면 됩니다.
- 네이밍 컨벤션은 [BEM](https://getbem.com/) 방식을 사용해 주세요. (선택사항)

### 웹 접근성
- 이미지의 경우, 대체 텍스트 제공이 필요합니다.
- 마우스로 조작할 수 있는 기능은 키보드로도 접근 및 조작이 가능해야 합니다.
- 폼 컨트롤은 식별 가능한 레이블이 필요합니다.
(시각적으로 표현되지 않더라도 스크린 리더가 읽을 수 있게 처리해야 합니다)
- 명도대비는 최소 4.5대 1을 준수해야 합니다. (`24px`, `18px Bold`인 경우, 최소 3대 1까지 허용 → [참고](https://www.w3.org/TR/WCAG22/#contrast-minimum))
- 좀 더 상세한 웹접근성 가이드 라인 및 [체크리스트](https://www.notion.so/32d50962016c4c90a04c8447298434fc?pvs=21)는 사람인에서 공개한 정보를 참고해 주세요.
    
    [소개 | 사람인 웹 접근성 교육](https://saramin.github.io/a11y)

### 크로스 브라우징

[Chrome](https://www.google.co.kr/chrome/?brand=CHBD&gclid=Cj0KCQiA_P6dBhD1ARIsAAGI7HCkKHmRUA37MyyZL1ncHFH3j3ksUAGN8MwjAVt-D8VDhqQJSI6uJxcaAsj-EALw_wcB&gclsrc=aw.ds), [Firefox](https://www.mozilla.org/ko/firefox/new/), [Safari](https://www.apple.com/kr/safari/), [Edge](https://www.microsoft.com/ko-kr/edge?form=MA13FJ) 등 모던 브라우저 환경에 맞춰 동작 가능하도록 구현 합니다.

### 검색 엔진 최적화

- SEO(Search Engine Optimization)를 고려해 주세요.
- Google SEO 기본 가이드 ([참고](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko))
- Open Graph Protocols 가이드 ([참고](https://ogp.me/) | [오픈 그래프 사용하기](https://velog.io/@sweetpumpkin/Open-Graph-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0))

### 성능 최적화

- 이미지 최적화([PNG, JPG](https://tinypng.com/) / [GIF](https://ezgif.com/)) 및 웹 사이트 최적화를 위해 노력해 주세요.
    - [Core Web Vitals](https://web.dev/vitals/)
    - [Google PageSpeed](https://pagespeed.web.dev/)
    - [Light House](https://github.com/GoogleChrome/lighthouse) 등

### 프로젝트 구성 및 관리

- 팀이 함께 사용할 공동 Github 저장소를 통해 프로젝트(project)를 관리해주세요.
- 팀원 간 소통 채널은 가급적 Github 이슈(issue)와 디스커션(discussion)를 사용하는 것을 권장합니다.
- 프로젝트 진행 상황을 진단하고 회고할 수 있도록 마일스톤(milestone, 이정표)을 추가 관리해야 합니다.
- 디스코드(discord) 구독(web hook) 플러그인을 활용해 알림(notification) 기능을 사용합니다.
- 풀 리퀘스트(PR) 기능을 사용해 `develop` 브랜치 병합(merge) 전, 코드 리뷰를 팀원과 합니다.

<br>

## ⚙️ Install & Usage

### Install
```bash
npm i
```
### Run live-server & Sass watch mode

```bash
npm start
```
### PostCSS build

```bash
npm run build
```

1-3) live
- live 파트
<img src="./assets/full_live.png">

- 마크업 구조
    - 섹션으로 각 구역 분배함
    - 
    
- 주요 스타일링 요약
    - 리스트 컨텐츠 가로 배열 위해 flex 사용함
    - 누운 숫자 구현 위해 ::after 사용함
    - hover시 상태 변화 구현하기 위해 transition으로 translate Y축 변화줌 (12px->0)
    - 포스터 호버시 관련 내용 나올 수 있게 dl>dd>dt에 포지션주고 hover시 opacity 0->1로
    - 변화줌.
  

- figma 시안 외 구현 사항

  
  1.  주요 issue

### live part
   1)
