## Project Introduction(프로젝트 소개)
##### ▪ react로 MVC(Model-View-Controllers) Pattern으로 만든 To Do List
<br/>

## What I've learned(배운 점)
##### ▪ MVC 패턴을 사용하여 모델에서 CRUD 로직을 효율적으로 관리하고, 컨트롤러에서는 모델의 CRUD 기능에 맞는 사용자 처리 로직을 관리하며, 뷰에서는 컴포넌트로 구성된 UI 화면들을 연결하여 직관적으로 관리할 수 있음을 경험했습니다. 이 방식은 각 역할을 명확하게 분리하여 코드의 유지 보수성을 높이고, 개발 프로세스를 더욱 효율적으로 만들 수 있습니다.
<br/>

## Key Feature(주요 기능)
### 1. 할 일 추가 기능
##### ▪ 사용자가 입력창(.input)에 텍스트를 입력하고 Enter 키를 누르거나, addBtn 버튼을 클릭하면 새로운 할 일(todo) 항목이 추가됨.
<br/>

### 2. 할 일 삭제 기능
##### ▪ 각 할 일에는 삭제 버튼이 포함되어 있으며, 사용자가 이 버튼을 클릭하면 해당 항목이 삭제됨.
<br/>

### 3. 완료 체크박스 기능
##### ▪ 사용자가 체크박스를 클릭하면 할 일의 checked 상태가 업데이트되며, 해당 항목이 "To Do" 목록에서 "Done" 목록으로 이동합니다(또는 반대로 이동).
<br/>

### 4. 할 일 수정 기능
##### ▪ 새로운 ToDo 항목 추가 시 input은 disabled=false로 시작합니다.
##### ▪ 수정 버튼 클릭 시 버튼이 "저장"으로 바뀌고, input은 disabled=true로 변경됩니다.
##### ▪ 저장 후 버튼이 "수정"으로 돌아가고, input은 다시 disabled=false로 돌아갑니다.
<br/>

## Installation(설치)
```
$ npx create-react-app react_MVC_Pattern_TodoList_7
$ cd react_MVC_Pattern_TodoList_7
$ npm run start
```

## Stacks(사용 스택)
### - Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
<br/>

### - Development
- Library

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<br/>
  
- Languages

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
<br/>

## Project View(화면 구성)
![image](https://github.com/user-attachments/assets/9e029fc2-c461-4c7d-a5f9-83238a925576)


## Project Structure(프로젝트 구조)
```markdown
react_MVC_Pattern_TodoList_7
├── public
├── src
│   ├── components
│   │   ├── DoneList.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   ├── controllers
│   │   └── TodoController.jsx
│   ├── models  
│   │   └── TodoModel.jsx
│   └── views
│       └── TodoView.jsx
├── App.css
├── App.js
├── index.js
├── README.md
```
