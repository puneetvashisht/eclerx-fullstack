import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody'

export default function AddEmployee() {


    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const addEmployee = () => {
        console.log({ name, salary });

        fetch('http://localhost:8000/employees/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, salary })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShowA(true);
            })
    }

    return (
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                className="bg-dark position-relative"
                style={{ minHeight: '240px' }}
            >
                <ToastContainer position="top-end" className="p-3">
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Alert!</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Employee Added Successfully!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
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
