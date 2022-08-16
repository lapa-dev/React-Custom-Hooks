import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    
    const initialState = [];

    const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodos( action );
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatchTodos( action );
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatchTodos( action );
    }


    return ({
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length, 
        todosPendingCount: todos.filter(todo => !todo.done).length
  })
}

