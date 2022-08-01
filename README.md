# 2022-08 Next js Template

next-js eslint, prettier, postcss, stylelint, jest, testing-library 가 적용된 기본 템플릿    

- [로그](#변경로그(월별))

- [라이브러리](#라이브러리)

- [디렉토리](#디렉토리)

- [코딩컨벤션](#코딩컨벤션)

---

## 변경로그(월별)

- 07

emotion -> postcss

> css-in-js의 성능이슈를 체험하고 postcss를 기본 템플릿으로 삼음

- 08

npm -> yarn -> npm

> yarn berry zero install을 시도, 
extension 호환성, 일부 lib 호환성 이슈를 체험하고 npm으로 회귀

next v12.2 -> 12.1

> 12.2의 미들웨어 변경으로 발생되는 성능 이슈를 발견하고 12.1로 다운그레이드






## 라이브러리

- core

```json
    "next": "^12.1.6",
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

- postcss

```json
  "postcss": "^8.4.14",
  "postcss-custom-media": "^8.0.2",
  "postcss-flexbugs-fixes": "^5.0.2",
  "postcss-nesting": "^10.1.10",
  "postcss-preset-env": "^7.7.2",
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

- [Naming](#Naming)

- [LintRules](#LintRules)

- [Postcss][#Postcss]

### Naming

1. PascalCase
  - 컴포넌트 
  - 타입
  - class

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

### LintRules


stylelint

1. naming snake_case (css-module 편의성상 snake_case 채용)

2. keyframes 경우 kebab-case

3. 작성순서 - mozilla css 작성 순서 추천 을 따름 

.stylelintrc.js 에서 수정가능

```json
  "order/properties-order":[
    "display",
    "list-style",
    "position",
    "float",
    "clear",
    "width",
    "height",
    "padding",
    "margin",
    "border",
    "background",
    "color",
    "font",
    "text-decoration",
    "text-align",
    "vertical-align",
    "white-space",
    "content"
  ],

```

## Postcss

이 템플릿의 목적은 config 최소화이기 때문에 기본 설정으로 맞추는 것을 지향하나, 

코드의 일관성과 편의성, 나오는 결과물의 호환성을 높이기 위해 post-css는 사용하기로 마음먹었습니다.

> postcsc.config.js

```js
module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-nesting': {},
    'postcss-custom-media': {
      importFrom: [
        () => {
          const customMedia = {
            '--device-mobile': '(min-width: 0) and (max-width: 640px)',
            '--device-tablet': '(min-width: 641px) and (max-width: 1280px)',
          };
          return { customMedia };
        },
      ],
    },
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
};
```

설정은 최소화 하였으나, customMedia 의 경우 본인이 사용할 코드를 해당 config 파일에 직접 추가할 것을 추천드립니다.

해당 설정들로 사용예)

> custom-media

```ts
  @media --device-mobile {
    .grid_item {
      grid-column: auto / span var(--mobile);
    }
  }

  @media --device-tablet {
    .grid_item {
      grid-column: auto / span var(--tablet);
    }
  }
```

> postcss-nesting

```css
  .class_something{
    & .nesting{
      ~~
    }
  }
```