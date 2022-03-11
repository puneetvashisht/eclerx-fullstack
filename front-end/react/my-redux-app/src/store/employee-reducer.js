import * as actions from '../actions/employee-actions'

let initialState = {
    employees : [
       
    ]
  }
  
  
  
// Create a reducer -- change the state
// immutable changes
const reducer = (state = initialState, action)=>{
    // console.log('In reducer: ', action);
    switch(action.type){
        case actions.FETCH_EMPLOYEES: return {employees: action.payload};
  
        // only immutable changes are allowed
        case actions.ADD_EMPLOYEE: let newEmployees = [...state.employees, action.payload]
                              return {employees: newEmployees};
  
        case actions.DELETE_EMPLOYEE: let filteredEmployees = state.employees.filter(e => e.id != action.payload.id)
                              return {employees: filteredEmployees};
        default: return state;
    }
  }

export default reducer;