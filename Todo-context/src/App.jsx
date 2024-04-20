import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";
import { useState } from "react";
// import TodoItem from "./components/TodoItem";
// import TodoItemsContext from "./store/todo-items-store";

function App() {



  // const [todoItems, setTodoItems] = useState([]);
  
  // const handleNewItems = (itemsName, itemDueDate) => {
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemsName, dueDate: itemDueDate },
  //   ]
  //   setTodoItems(newTodoItems)
  // }

  // const handleDeleteItem = (todoItemName) => {
  //   const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  //   setTodoItems(newTodoItems)
  // }

//   return (
//     <TodoItemsContext.Provider value={defaultTodoItems}>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo onNewItem={ handleNewItems} />
//         <WelcomeMessage></WelcomeMessage>
//         <TodoItems
//           todoItems={todoItems}
//           onDeleteClick = { handleDeleteItem }
//           ></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }
// export default App;




  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
