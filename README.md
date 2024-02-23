![6](https://github.com/SangyeopNam/403-wiki/assets/119817396/50765550-5910-4cad-8c5f-61870b008ea3)

# 403 WIKI PAGE

## 위키 실행방법

### 1. 기존 Wiki Page
#### - wiki html file
#### - 실행 : 해당 HTML 브라우저에서 직접 실행

### 2. Vue.js Wiki Page
#### - local wiki server
#### - 실행
##### 1. 현재 Repository clone
- if) 현재 레포지토리 clone 시
```
$ git clone https://github.com/SangyeopNam/403-wiki.git
```

- else if) origin 설정 후 fetch 시
```
$ git remote add origin https://github.com/SangyeopNam/403-wiki.git
$ git fetch origin main
$ git checkout main
```

- fork 시
```
fork 후 본인 레포지토리에서 위 절차 동일하게 수행(레포지토리 경로만 본인 경로로 수정)
```

##### 2. 로컬 레포지토리에서 vue source file 메인경로로 이동 후 vite server 실행
```
~> cd {Repository root directory}
{Repository root directory}> cd docs
{Repository root directory}/docs> npm install
{Repository root directory}/docs> npm run dev
```

##### 3. 로컬 레포지토리에서 file server 메인경로로 이동 후 node.js server 실행  * 2.에서 실행된 vite는 그대로 두고, 새 창에서 실행해야 합니다.
```
~> cd {Repository root directory}
{Repository root directory}> cd fileserver
{Repository root directory}/fileserver> node server.js
```

##### 4. wiki server 접속 : 웹 브라우저에서 http://localhost:1234 접속
