import { html } from "../../node_modules/lit-html/lit-html.js";

const loginTemplate = ()=>html`
    <form class="login-form">
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
ctx.render(loginTemplate())
}