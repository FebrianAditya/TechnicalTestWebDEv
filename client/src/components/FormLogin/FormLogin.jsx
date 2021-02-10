import React, { useState } from "react"
import { adminLogin, superadminLogin } from "../../hooks/apiRequest"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'

function FormLogin() {
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const inputData = {
        role,
        email,
        password
    }

    function handlerSubmit(e) {
        e.preventDefault()

        if(role === "admin") {
            // console.log("admin");
            dispatch(adminLogin(inputData))
                .then(res => {
                    localStorage.setItem("access_token", res.data.access_token)
                    dispatch({ type: 'SET_LOCAL_ADMIN', payload: res.data.access_token })
                    history.push("/ticket")
                })
                .catch(err => {
                    console.log(err);
                })
        }else if(role === "superadmin") {
            dispatch(superadminLogin(inputData))
                .then(res => {
                    localStorage.setItem("access_token", res.data.access_token)
                    dispatch({ type: 'SET_LOCAL_SUPERADMIN', payload: res.data.access_token })
                    history.push("/ticket")
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return(
        <>
            <div className="container">
                <form onSubmit={handlerSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
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
                    <button type="submit" className="btn btn-primary mt-4">Log In</button>
                </form>
            </div>
        </>
    )
}

export default FormLogin