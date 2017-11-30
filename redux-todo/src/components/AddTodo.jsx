//action 1: take in text from input
//return as proper action json object for use w/ other components

export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        text, 
        completed: false
    }
}

//2: take filter and return proper "aaction" json obj to send to other comp.
export const setVisibilityFilter = (filter) => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}
//3: take todo item's id and return proper action obj to send to other comp.
export const toggleTodo= (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

//reducer take state of Redux (an arr of previous TO Do items) and return
//a NEW arr of todos (new state) w/ the new ToDo added if the action type="ADD_TODO"

export const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return 
                [...state, {id: action.id, text: action.text, completed: false}]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if(todo,id = action.id) {
                    retirntor
                }
                return Object.assign({},
                    todo, {completed: !todo.completed})
            })
        case 'SET_VISIBILITY_FILTER' : {
            return action.filter
        }
        default:
            return state
    }
}