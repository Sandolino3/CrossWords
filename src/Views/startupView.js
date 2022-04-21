import { html } from "../../node_modules/lit-html/lit-html.js";

const startupTemplate = (startF)=>html`
<div class="startup-screen">
    <p class="welcome">Welcome to crossword puzzle game</p>
    <button class="start-game" @click=${startF}>
        START GAME 
    </button>
</div>
`

export function startupView(ctx){
ctx.render(startupTemplate(startF))
function startF(){
    if (!ctx.user) {
       alert('please login!')
        return
    }
    ctx.page.redirect('/start')
}
}