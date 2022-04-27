// import { html } from "../../node_modules/lit-html/lit-html.js";
import { html } from"../Lit-html.js"

import{login} from"../util/data.js"

const loginTemplate = (loginFu)=>html`
    <form class="login-form" @submit=${loginFu}>
        <legend class="login-text">Login</legend>
        <label for="email" class="email-label" >Email</label>
        <input id="email" name="email" class="email-input" type="text" placeholder="Email">

        <label for="password" class="password-label">Password</label>
        <input id="password" class="password-input" name="password" type="password" placeholder="Password">

        <button type="submit" class="login">Login</button>
    </form>
`

export function loginFunc(ctx){
    ctx.render(loginTemplate(loginFu))

    async function loginFu(e){
        e.preventDefault()
        let formData = new FormData(e.target)
    
        let email = formData.get('email')
        let password = formData.get('password')
        if (email == ''|| password =='') {
            alert('fealds are empty!')
            return
        }
        await login(email,password)
        ctx.page.redirect('/')
    }
}