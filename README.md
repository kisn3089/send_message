## Send Message

## 감사인사말 등 전하고 싶은 말을 작성하여 마음을 전달하는 서비스

#### 소요기간 2022.12.20 -> 2022.12.22 (3일)

### Update

```
2023.03.04
업데이트 내용
- PC일때 공유하기 버튼 클릭 시 모바일로 유도하는 안내 메세지 생성
- WebShare API 공유하기 기능 추가
```

> 공유하기 기능은 베포된 주소에서만 가능합니다!

### Deployment Vercel: https://send-message.vercel.app/create

### 실행 방법

```
$ npm i && npm start
```

### Technology

- React
- TypeScript
- CSS
  - StyledComponents
- WebShare API

### 구현

#### 반응형

```
Mobile (Iphone 13 pro 기준)
```

<img src="https://user-images.githubusercontent.com/96061695/229476383-f7156757-1bd4-4500-aca9-6cb27744da89.jpg" width="400px" />
<img src="https://user-images.githubusercontent.com/96061695/229476537-d424ac27-b9aa-425e-84ea-f020f776df57.jpg" width="400px" />

<img src="https://user-images.githubusercontent.com/96061695/229476624-c40ed22c-4261-4d14-bafc-32e0e4aeb63e.JPG" width="400px" />
<img src="https://user-images.githubusercontent.com/96061695/229476706-75442877-6ad4-4db4-b9c2-138c7b5f1e80.jpg" width="500px" />

> 구조

```
작성한 메세지를 setState해도 공유하면 해당 디바이스에서는 최초 렌더이기 때문에 state가 초기화 된다.
-> 확인 버튼을 누르면 결과 페이지 url로 이동시킨다. path="/view/:title/:content"
이렇듯 데이터가 url로 들어가는 쿼리스트링 구조로 변화시켰고 최초 렌더시 url 데이터를 초기값으로 주었다.
```
