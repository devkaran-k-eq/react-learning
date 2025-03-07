import {createContext, useContext} from "react"


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo MSG",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (todo, id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
