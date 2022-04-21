import { html } from "../../node_modules/lit-html/lit-html.js";

const startupTemplate = ()=>html`
<div class="startup-screen">
    <p class="welcome">Welcome to crossword puzzle game</p>
    <button class="start-game" >
        <a href="/start">START GAME</a>
    </button>
    <!-- <button class="login">login</button>
    <button class="register">register</button> -->
</div>
`

export function startupView(ctx){
ctx.render(startupTemplate())
}