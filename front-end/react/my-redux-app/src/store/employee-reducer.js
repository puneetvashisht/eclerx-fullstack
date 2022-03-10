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
  
        case 'DELETE_EMPLOYEE': let filteredEmployees = state.employees.filter(e => e.id != action.payload.id)
                              return {employees: filteredEmployees};
        default: return state;
    }
  }

export default reducer;