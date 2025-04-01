# Project Name : Mosaic Renewal (samsung SDS) 
## Skill Set
- git
- vue3 composition API
- Quasar
- sass ( or scss)
- storybook


## Setting
- vscode 에디터 설치
- vscode 플러그인 설치 (git lense, git graph, git history, vue official, vue3 snippet)
- git 설치
  https://git-scm.com/downloads
- git 계정정보 세팅
  `git config user.email "your@email.com (for git commit log)"
  `git config user.name "yourname (for git commit log)"
- nvm 설치
- node lts 버전 install 
- yarn global하게 설치
  `npm install --global yarn


- quasar cli (with vite) 설치 (개발지원 예정)
- prettier/ lint 세팅 (개발지원 예정)


## Rules
### CrossBrowsing
- 예시 : chrome 최신버전 , IE 고려하지 않음, Edge 최신버전
- 모바일 기준 디바이스 및 OS 버전 / 최저 사양 디바이스 or OS버전 

### 대응 디바이스
- PC (Major)/ Tablet / mobile 

### 해상도 
1) 어드민
가로 100% 유동사이즈, min-width:1280
2) 사용자 포털
~1280px 잘림 후 가로스크롤
1281~1920 유동사이즈
1921~ 좌우 여백 중앙 정렬


### 형상관리 : git 

### 디자인/기획 : Figma 

### 이미지
- 기본 : svg / png  (sprite 이미지 사용하지 않음)

### 코딩스타일
vue 공식 스타일 가이드의 코딩 규칙과 가이드를 따른다
https://ko.vuejs.org/style-guide/


### How to Compile
- yarn run dev (or npm run dev)