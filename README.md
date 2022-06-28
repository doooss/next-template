# 2022-07 Next js Template

기존 템플릿에서 css-in-js 를 제외한 기본에 충실한 템플릿

- [라이브러리](#라이브러리)

- [디렉토리](#디렉토리)

- [코딩컨벤션](#코딩컨벤션)

---

## 사용 라이브러리

- core

```json
  "next": "12.2.0",
  "react": "18.2.0",
  "react-dom": "18.2.0"
```

- lint

```json
  "eslint": "8.18.0",
  "eslint-config-next": "12.2.0",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-prettier": "^4.1.0",
  "eslint-plugin-simple-import-sort": "^7.0.0",
  "prettier": "^2.7.1",
  "stylelint": "^14.9.1",
  "stylelint-config-css-modules": "^4.1.0",
  "stylelint-config-prettier": "^9.0.3",
  "stylelint-config-standard": "^26.0.0",
  "stylelint-order": "^5.0.0",
  "stylelint-prettier": "^2.0.0",
```

- test

```json
  "@testing-library/jest-dom": "^5.16.4",
  "@testing-library/react": "^13.3.0",
  "jest": "^28.1.1",
  "jest-environment-jsdom": "^28.1.1",
```

## 디렉토리

```bash
  ├─api
  ├─components
  ├─const
  ├─hooks
  ├─pages
  ├─query
  ├─store
  ├─styles
  ├─types
  └─utils
```

1. api - API 접속 주소 및 API 문서 맞게 작성

2. components 

> 컴포넌트 구조는 아래 3가지로 나뉨, elements 기본 layouts 상위 features pages 들어가기 직전 구조

```bash
  ├─elements
  ├─features
  └─layouts
```

3. hooks - custom hooks

4. pages - next page

5. query - react query 작성란

6. store - global state 보관함

7. styles - global style 보관함

8. types - global types 보관함

9. utils - api 와는 별개의 util 함수 보관함

## 코딩컨벤션

1. PascalCase
  - 컴포넌트 
  - 타입선언시

```ts
  // 컴포넌트는 파스칼 케이스를 이용한다
  const Component = ()=>{return(<></>)}
```

2. snake_case
  - css naming
  - 고정값은 대문자 SNAKE_CASE

```css
  .css_prop{

  }
```

3. camelCase
  - 기타 모든 사항은 camelCase 를 이용한다

4. kebabCase
  - 컴포넌트를 제외한 네이밍은 kebabcase 를 이용한다.