

import React from 'react';

const Todo = (props) => {

    const { todo, completedTodo, index, removeTodo } = props

    return <>
        <div className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div className="buttons">
                <button
                 className="button complete"
                    onClick={() => completedTodo(index)}
                >
                    Terminé
                </button>
                <button className="button remove" onClick={() => removeTodo(index)}>
                    Supprimer
                </button>
            </div>

        </div>

    </>


}

export default Todo