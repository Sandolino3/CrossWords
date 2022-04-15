import { submitFunc } from "./isEqual.js"
import { selectRow } from "./selection.js"
import { renderContext } from "./renderMid.js"
import page from "../node_modules/page/page.mjs"
import { startupView } from "./Views/startupView.js"
import { levelSelect } from "./Views/levelSelectionView.js"
import { level1View } from "./Views/level1View.js"


page(renderContext)

page('/',startupView)
page('/start',levelSelect)
page('/level1',level1View)



page.start()



// let squeares = document.querySelectorAll('input')


// document.getElementById('subm-form').addEventListener('submit',submitFunc)

// squeares.forEach(el=>{
//     el.addEventListener('click', selectRow)
// })



