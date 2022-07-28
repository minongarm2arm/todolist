import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import ToDoItemList from '../components/ToDoItemList';

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage__container">
      {/* 할 일을 추가할 input 박스 */}
      <InputBox todoList={todoList} setTodoList={setTodoList} />

      {/* 진행 중인 할 일 목록 */}
      <ToDoItemList
        title={'Working'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false} // 완료되지 않은 할 일 목록
      />

      {/* 완료한 할 일 목록 */}
      <ToDoItemList
        title={'Done'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true} // 완료한 목록
      />
    </div>
  );
};

export default Home;
