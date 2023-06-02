import { BASE_URL } from "global"
export const userLogin = (username, password) => {
    fetch(
            BASE_URL + "/user/login",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            }
        ).then(json => {
            return json
        }).catch(error => {
            return json
        })
}