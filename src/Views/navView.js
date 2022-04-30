// import { html } from "../../node_modules/lit-html/lit-html.js";
import { html } from"../Lit-html.js"


const guestTemp = html`
        <a href="/login" class="login-nav">login</a>
        <a href="/register" class="login-nav">register</a>
`
const userTemp = html`
        <a href="/logout" class="logout-nav">logout</a>
`
const navTemplate = (user)=>html`
    <nav>
        <button class="nav-btn"><a href="/"><i class="fa fa-home"></i></a></button>
    
        ${user
        ?userTemp
        :guestTemp}
        
    </nav>
`

export function navigationView(ctx){
    return navTemplate(ctx.user)
}