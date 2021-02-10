import React, { useState } from "react"
import { adminRegister, superAdminRegister } from "../../hooks/apiRequest"
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"

function FormRegister() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const history = useHistory()
    const inputData = {
        firstName,
        lastName,
        email,
        password,
        role
    }

    function handlerSubmit(e) {
        e.preventDefault()

        if(role === "admin") {
            // console.log("admin");
            adminRegister(inputData)
                .then(response => {
                    Swal.fire('Your New Account Is Ready!');
                    history.push("/")
                })
                .catch(err => {
                    console.log(err);
                })
        }else if(role === "superadmin") {
            superAdminRegister(inputData)
                .then(response => {
                    Swal.fire('Your New Account Is Ready!');
                    history.push("/")
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return(
        <>
            <form onSubmit={handlerSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" className="form-control" onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group mt-2">
                    <label>Last Name:</label>
                    <input type="text" className="form-control" onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="form-row mt-2">
                    <div className="form-group col-md-6">
                        <label>Email:</label>
                        <input type="email" className="form-control" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6 mt-2">
                        <label>Password:</label>
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group mt-2">
                    <label>Choose Role:</label>
                    <div>
                        <div>
                            <input type="radio" name="my-input" value="admin" onChange={e => setRole(e.target.value)}/>
                            <label>admin</label>
                        </div>
                        <div>
                            <input className="ml-4" type="radio" name="my-input" value="superadmin" onChange={e => setRole(e.target.value)}/>
                            <label>super admin</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Register</button>
            </form>
        </>
    )
}

export default FormRegister