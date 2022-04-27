import {render} from "./Lit-html.js"
import{navigationView} from "./Views/navView.js"
import {getUserData} from "./util/util.js"

let toAppend = document.querySelector('.game-body')
let toAppendNav = document.querySelector('.nav-bar')

export function renderContext(ctx,next){
    ctx.render = (content) => render(content,toAppend)
    next()
}

export function renderNav(ctx, next){
    render(navigationView(ctx),toAppendNav)
    next()
}

export function authMid(ctx,next){
    ctx.user = getUserData()
    next()
}