import { logout } from "../util/data.js";
export function logoutView(){
    logout()
    ctx.page.redirect('/')
}