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

## Optionnal
- Cursor AI 에디터 설치
- Figma 앱

## Rules
### CrossBrowsing (확인 후 수정예정)
- 예시 : chrome 최신버전 , IE 고려하지 않음, Edge 최신버전
- 모바일 기준 디바이스 및 OS 버전 / 최저 사양 디바이스 or OS버전 

### 대응 디바이스 (확인 후 수정예정)
- PC (Major)/ Tablet / mobile 

### 해상도 (확인 후 수정예정)
1) 어드민
가로 100% 유동사이즈, min-width:1280
2) 사용자 포털
~1280px 잘림 후 가로스크롤
1281~1920 유동사이즈
1921~ 좌우 여백 중앙 정렬


### 형상관리 : git 

### 디자인/기획 : Figma 

### 이미지
- 단일컬러 아이콘 : svg 컴포넌트 (sprite 이미지 사용하지 않음) 리사이즈, fill 컬러 props로 적용할 수 있도록 
- 멀티컬러 아이콘 : svg 컴포넌트 props 값으로 적용 가능하도록, 리사이즈만 가능
- 사용자가 hover등의 동작으로 아이콘의 변형을 적용해야할 경우, css 배경이미지 방식으로 진행할 수 있음 filter로 색상변경 

### 코딩스타일
vue 공식 스타일 가이드의 코딩 규칙과 가이드를 따른다
https://ko.vuejs.org/style-guide/


### How to Compile
- yarn run dev (or npm run dev)


### 브랜치 룰



### 퍼블리싱 전략(추후 논의필요)
- 공통 컴포넌트 디자인/기획 먼저 진행 (UI기능,기획요소,예상되는 컨텐츠와 디자인 필요)
- 공통 아이콘 사이즈는 공통 사이즈/ 블랙 컬러로
- 컬러,사이즈,간격,라운드 등은 디자인 토큰으로 시스템화-> 동일 네이밍으로 변수화 (추후 디자인 수정시 변수의 값만 수정하도록)
- 어드민/사용자 컴포넌트 디자인 스타일은 동일하게, 두번 작업하지 않게 
- 어드민/사용자 소스는 레파지토리로 분리할지, 폴더로 구분할지 여부
- 작업 순서 :
1) Quasar 컴포넌트 샘플페이지 제작
2) Quasar 컴포넌트 구조를 기반으로 기획 / 디자인(디자인시 OPUS desing systme 기반으로 가능한지 확인)
3) Quasar 컴포넌트 디자인 커스텀 진행/ 샘플페이지에서 확인
3) 예외케이스 컴포넌트(quasar에 없는) 는 퍼블에 즉시 협의요청, 별도의 기획/디자인 정의 후 퍼블작업 진행
4) 어드민 페이지는 가능한 Quasar 컴포넌트만을 사용하도록 하고, 사용자 시안과 동일하게 디자인
5) 어드민 페이지 먼저 퍼블 시작
6) 사용자 페이지는 어드민 컴포넌트 커스텀 세트로 시작, theme 컬러/사이즈 등을 변수의 값만 변경해서 적용 가능하도록 함
7) 어드민 주요 페이지 적용 시점에 스토리북 가이드 작업 시작 