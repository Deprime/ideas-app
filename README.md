
# Test idea app - frontend

This app based on **React.js**. This app provides an interface to work with ideas list.

## Requirements

- Node.js

## Installation

- clone git repo
- open terminal and navigate to repo directory
- make `npm i` or `yarn` if you prefer

## Setup

- make a copy of `.env.sample` environment cofig file and rename it to `.env`
- In `.env` change next variabales according to your backend api url:
  - `VITE_API_URL` (basicly it is `http://127.0.0.1:8000/api`)

## Running app

To run app in dev mode:

```console
npm run dev
```

## ToDo list

Тут я опишу, чего я не сделал изза нехватки времени в отпускном режиме.

Это мой первый опыт использования redux-saga. Также, я уже давно "сижу" на MobX и несколько отдалился от Redux.
С выходом redux-toolkit похоже ситуация налаживается в стороноу этого стейт-менеджера.

- Не использовал TypeScript
- Не реализовал уведомления об ошибках для CRUD операций
- Некоторые компоненты можно было сегрегировать гораздо лучше
- Формы редактирования и создания можно вынести в  единый компонент для переиспользования кода
- Для полноты картины, можно было реализовать авторизацию
- В целом мое субъективное мнение: можно было реализовать приложение гораздо "опрятнее"
