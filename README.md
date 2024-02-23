# 403 WIKI PAGE

## 프로젝트명 : CoachME

## 위키 실행방법

### 기존 Wiki Page
#### wiki.html
#### 실행 : 해당 HTML 브라우저에서 직접 실행

### Vue.js Wiki Page
#### local wiki server
#### 실행
1. 현재 Repository fork
2. 레포지토리에서 vue source file 메인경로로 이동 후 vite server 실행
```
cd {Repository root directory}/docs
npm install
npm run dev
```
3. 레포지토리에서 file server 메인경로로 이동 후 node.js server 실행
```
cd {Repository root directory}/fileserver
node server.js
```
4. wiki server 접속 : 웹 브라우저에서 http://localhost:1234 접속
