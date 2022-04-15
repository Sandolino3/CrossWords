import {render} from "../node_modules/lit-html/lit-html.js"

let toAppend = document.querySelector('.game-body')

export function renderContext(ctx,next){
    ctx.render = (content) => render(content,toAppend)
    next()
}