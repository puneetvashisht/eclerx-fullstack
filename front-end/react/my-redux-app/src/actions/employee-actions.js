export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';


const baseUrl = 'http://localhost:8000/employees'

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
        dispatch({type: ADD_EMPLOYEE, payload: employee});

    }
}


export const fetchEmployees = () => {
    return async(dispatch) => {
        // fetch('http://localhost:8000/employees')
        //   .then(response => response.json()) 
        //   .then(json => {
        //       console.log(json);
        //       dispatch({type: FETCH_EMPLOYEES, payload: json});
        //   })
        //   .catch(err => console.log(err));
        let response = await fetch(baseUrl);
        let data = await response.json();
        dispatch({type: FETCH_EMPLOYEES, payload: data});

    }
}

export const deleteEmployee = (id) => {
    // http communication
    return dispatch=> {
        fetch(baseUrl + id, {
            method: 'DELETE'
        })
          .then(response => response.json()) 
          .then(json => {
              console.log(json);
              dispatch({type: DELETE_EMPLOYEE, payload: {id} });
          })
          .catch(err => console.log(err));
    }
    // return {type: DELETE_EMPLOYEE, payload: {id}} 
}


