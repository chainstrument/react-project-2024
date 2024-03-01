

import React, { useState } from 'react';


const TodoForm = (props)  => {

    const { addTodo } = props
    const [todo, setTodo ] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo(todo)
        setTodo('')

    }


    return <form onSubmit={handleSubmit}>
        <input
            type='text'
            className='input'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
    </form>
}

export default TodoForm