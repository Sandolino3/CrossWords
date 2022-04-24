import { renderContext, renderNav, authMid } from "./renderMid.js"
import page from "../node_modules/page/page.mjs"
import { startupView } from "./Views/startupView.js"
import { levelSelect } from "./Views/levelSelectionView.js"
import { level1View } from "./Views/level1View.js"
import { loginFunc } from "./Views/loginView.js"
import { registerView } from "./Views/registerView.js"
import { logoutView } from "./Views/logoutView.js"

page(authMid)
page(renderNav)
page(renderContext)

page('/',startupView)
page('/start',levelSelect)
page('/level1',level1View)
page('/login',loginFunc)
page('/register',registerView)
page('/logout',logoutView)

page.start()




