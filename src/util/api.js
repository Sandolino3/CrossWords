const host = 'http://localhost:3030'
import { getUserData } from "./util.js"


async function request(method,url, data){
    const options = {
        method,
        headers:{},
    }
    if (data !== undefined) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(data)
    }
    let userData = getUserData()
    if (userData !== null) {
        options.headers['X-Authorization'] = userData.token
        
    }

    try {
        let response = await fetch(host + url, options)
        if (response.ok !== true) {
            const error = await response.json()
            throw new Error (error.message)
        }
        if (response.status == 204) {
            return response
        }else{
            return response.json()
        }
    } catch (error) {
        alert(error.message)
        throw error
    }
}

let get = request.bind(null,`get`)
let post = request.bind(null,`post`)
let put = request.bind(null,`put`)
let del = request.bind(null,`DELETE`)

export{
    get,
    post,
    put,
    del,
}