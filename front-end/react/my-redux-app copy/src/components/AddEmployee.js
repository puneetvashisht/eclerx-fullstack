import React, { useState } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/employee-actions'


function AddEmployee(props) {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const addEmployee = () => {
        console.log({ name, salary });

        props.onAddEmployee({ name, salary })
    }

    return (
        <>
            
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Salary</span>
                <input onChange={(e) => setSalary(e.target.value)} value={salary} type="number" className="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button onClick={addEmployee} className="btn btn-primary">Add Employee</button>

        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        // direct dispatch to reducer -- no scope for api call
        // onAddEmployee: (employee) => dispatch({type: actions.ADD_EMPLOYEE, payload: employee})
        onAddEmployee: (employee) => dispatch(actions.addEmployee(employee))
    }
  }

export default connect(null, mapDispatchToProps)(AddEmployee)
