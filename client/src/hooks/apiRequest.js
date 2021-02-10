import axios from "axios"
const url = "http://localhost:3000"

export function adminRegister(payload) {
    // console.log("masuk admin");
    return axios({
        method: 'POST',
        url: `${url}/admin/register`,
        data: payload
    })
}

export function superAdminRegister(payload) {
    // console.log("masuk super admin");
    return axios({
        method: 'POST',
        url: `${url}/superadmin/register`,
        data: payload
    })
}

export function adminLogin(payload) {
    

    return (dispatch, getState) => {
            return axios({
                method: 'POST',
                url: `${url}/admin/login`,
                data: {
                    email: payload.email,
                    password: payload.password
                }
             })
    }
}

export function superadminLogin(payload) {

    return (dispatch, getState) => {
        return axios({
            method: 'POST',
            url: `${url}/superadmin/login`,
            data: {
                email: payload.email,
                password: payload.password
            }
        })
    }
}