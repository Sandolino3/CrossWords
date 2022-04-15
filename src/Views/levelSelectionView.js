import { html } from "../../node_modules/lit-html/lit-html.js";

const levelSelectTemplate = ()=>html`
<div id="selection-buttons">
    <p class="select-text">Select your level</p>
    <button class="level-button" id="level1"><a href="/level1">1</a></button>
    <button class="level-button" id="level2"><a href="/level1">2</a></button>
    <button class="level-button" id="level3"><a href="/level1">3</a></button>
</div>
`

export function levelSelect(ctx){
    ctx.render(levelSelectTemplate())
}