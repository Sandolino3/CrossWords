import * as api from "./api.js"
import {setUserData,clearUserData} from "./util.js"

export async function login(email,password){
let obj = {
    email,
    password,
}
const result = await api.post('/users/login',obj)
const data = {
    email: result.email,
    id: result._id,
    token: result.accessToken,
}
setUserData(data)

}

export async function logout(){
    api.get('/users/logout')
   clearUserData()

}

export async function register(email,password){
    let obj = {
        email,
        password,
    }
    const result = await api.post('/users/register',obj)
    const data = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    }
    setUserData(data) 
}

export async function getItems(){
    return api.get('/data/words')
}

export async function createItem(data){
    return await api.post('/data/words',data)
}

export async function getById(id){
return api.get(`/data/words/${id}`)
}

export async function del(id){
return await api.del(`/data/albums/${id}`)
}

export async function editItem(id,data){
    return api.put(`/data/albums/${id}`,data)
}

export async function search(text){
    return api.get(`/data/albums?where=name%20LIKE%20%22${text}%22`)
}

