import { html } from "../../node_modules/lit-html/lit-html.js";
import { selectRow } from "../selection.js";
import { submitFunc } from "../isEqual.js";

const answerTemplate = (levelTemp,submitFunc)=>html`
<div class="table">
${levelTemp}
<div class="question">
    <textarea name="question" id="question-field" cols="60" rows="4"></textarea>
    <form @submit=${submitFunc} class="submit-form" id="subm-form" autocomplete="off">
        <input type="text" name="answer" id="answer-field">
        <button class="submit-button">Submit</button>
    </form>
</div>

</div>
`

const level1Template = (selectRow)=>html`
 <div class="word-horizontal" id="first-word">
        <input @click=${selectRow} type="button" id="first-cross" value=" ">
        <input @click=${selectRow} type="button" value=" ">
        <input @click=${selectRow} type="button" value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" " id="second-cross">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
    </div>

    <div class="word-vdrtical" id="second-word">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" " id="margin-el">
        <input @click=${selectRow} type="button"value=" " id="third-cross"">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
    </div>

    <div class="word-horizontal" id="third-word">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">

    </div>
    <div class="word-vdrtical" id="forth-word">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" " id="forth-cross">
    </div>
    <div class="word-horizontal" id="fift-word">
        <input @click=${selectRow} type="button"value=" " id="fift-cross">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
        <input @click=${selectRow} type="button"value=" ">
</div>
`

export function level1View(ctx){
   ctx.render(answerTemplate(level1Template(selectRow),submitFunc))
}