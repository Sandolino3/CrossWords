import { logout } from "../util/data.js";
export function logoutView(ctx){
    logout()
    ctx.page.redirect('/')
}