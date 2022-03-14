import {createSlice} from '@reduxjs/toolkit'


const employeeReducer = createSlice({
  name: "employees",
  initialState: {employees: []},
  reducers: {
    FETCH_EMPLOYEES(state, action){
      return {employees: action.payload}
    },
    ADD_EMPLOYEE(state, action){
      let newEmployees = [...state.employees, action.payload]
      return {employees: newEmployees};
    },
    DELETE_EMPLOYEE(state,action){
      let filteredEmployees = state.employees.filter(e => e.id != action.payload.id)
      return {employees: filteredEmployees};
    }
  }
})


const baseUrl = 'http://localhost:8000/employees/'

export const addEmployee = (employee) => {
    return async(dispatch) => {
       
        let response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
        let data = await response.json();
        console.log(data);
        dispatch(ADD_EMPLOYEE(employee));

    }
}


export const fetchEmployees = () => {
    return async(dispatch) => {
        let response = await fetch(baseUrl);
        let data = await response.json();
        dispatch(FETCH_EMPLOYEES(data));

    }
}

export const deleteEmployee = (id) => {
    // http communication
    console.log(id);
    return dispatch=> {
        fetch(baseUrl + id, {
            method: 'DELETE'
        })
          .then(response => response.json()) 
          .then(json => {
              console.log(json);
              dispatch(DELETE_EMPLOYEE({id}));
          })
          .catch(err => console.log(err));
    }
    // return {type: DELETE_EMPLOYEE, payload: {id}} 
}


// export actions and reducer
export const {FETCH_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE} = employeeReducer.actions;
export default employeeReducer.reducer;