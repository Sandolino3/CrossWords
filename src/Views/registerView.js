// import { html } from "../../node_modules/lit-html/lit-html.js";
import { html } from"../Lit-html.js"

import { register } from "../util/data.js";

const loginTemplate = (registerFunc)=>html`
    <form class="login-form" @submit=${registerFunc}>
        <legend class="login-text">Register</legend>
        <label for="email" class="email-label" >Email</label>
        <input id="email" name="email" class="email-input" type="text" placeholder="Email">

        <label for="password" class="password-label">Password</label>
        <input id="password" class="password-input" name="password" type="password" placeholder="Password">

        <label for="password" class="passwordRe-label">Repeat password</label>
        <input id="passwordRe" class="passwordRe-input" name="passwordRe" type="password" placeholder="Password">

        <button type="submit" class="register">Register</button>
    </form>
`
export function registerView(ctx){
ctx.render(loginTemplate(registerFunc))
async  function registerFunc(e){
    e.preventDefault()
    let formData = new FormData(e.target)

    let email = formData.get('email')
    let password = formData.get('password')
    let rePass = formData.get('passwordRe')
    if (email == ''|| password =='') {
        alert('fealds are empty!')
        return
    }
    if (password !== rePass) {
        alert('password did not match')
        return
    }
    await register(email,password)
    ctx.page.redirect('/')
}
}