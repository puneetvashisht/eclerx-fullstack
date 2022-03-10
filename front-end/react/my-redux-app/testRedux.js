// Pure Redux
//import the redux library
const redux = require('redux');
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'

let initialState = {
    employees : [
        {id: 1, name: 'Test', salary: 11111}
    ]
}

// Create a reducer -- change the state
// immutable changes
const reducer = (state = initialState, action)=>{
    console.log('In reducer: ', action);
    switch(action.type){
        case 'FETCH_EMPLOYEES': return state.employees;

        // only immutable changes are allowed
        case 'ADD_EMPLOYEE': let newEmployees = [...state.employees, action.payload]
                              return {employees: newEmployees};

        case DELETE_EMPLOYEE: let filteredEmployees = state.employees.filter(e => e.id != action.payload.id)
                              return {employees: filteredEmployees};
    }
}

// Create a Store - state container
const store = redux.createStore(reducer)

store.subscribe(()=> console.log(store.getState()))

// Dispatch Actions -- trigger state changes in store
// const action = {type: 'FETCH_EMPLOYEES'};
const action = {type: 'ADD_EMPLOYEE', payload: {id: 2, name: 'Test2', salary: 22222}}
store.dispatch(action)

const deletAction = {type: DELETE_EMPLOYEE, payload: {id: 1}}
store.dispatch(deletAction);
