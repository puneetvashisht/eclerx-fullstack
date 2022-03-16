const redux  = require('redux')

// reducers

const initialState = {
    auth: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN': return {auth: true}

        case 'LOGOUT': return {auth: false}
    }
}

// store
const store = redux.createStore(reducer)

// action

store.subscribe(()=>console.log(store.getState()))

store.dispatch({type: 'LOGIN'})

store.dispatch({type: 'LOGOUT'})