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

const level1Template = (selectRow,com)=>html`
${console.log(com)
}
 <div class="word-horizontal" id="first-word">
        <input @click=${selectRow} type="button" id="w1" value=" " class="w2">
        <input @click=${selectRow} type="button"id="w1" value=" ">
        <input @click=${selectRow} type="button"id="w1" value=" ">
        <input @click=${selectRow} type="button"id="w1" value=" ">
        <input @click=${selectRow} type="button"id="w1" value=" ">
        <input @click=${selectRow} type="button"id="w1" value=" " class="w4">
        <input @click=${selectRow} type="button"id="w1" value=" ">
        <input @click=${selectRow} type="button"id="w1" value=" ">
        <input @click=${selectRow} type="button"id="w1" value=" " class="w6">
        <input @click=${selectRow} type="button"id="w1" value=" ">
    </div>

    <div class="word-vdrtical" id="second-word" position:"absolute">
        <input @click=${selectRow} type="button"value=" " id="w2">
        <input @click=${selectRow} type="button"value=" " id="w2">
        <input @click=${selectRow} type="button"value=" " id="w2" class ="w3">
        <input @click=${selectRow} type="button"value=" " id="w2">
        <input @click=${selectRow} type="button"value=" " id="w2">
    </div>

    <div class="word-horizontal" id="third-word">
        <input @click=${selectRow} type="button"value=" " id="w3">
        <input @click=${selectRow} type="button"value=" " id="w3" class ="w7">
        <input @click=${selectRow} type="button"value=" " id="w3">
        <input @click=${selectRow} type="button"value=" " id="w3">

    </div>
    <div class="word-vdrtical" id="forth-word">
        <input @click=${selectRow} type="button"value=" " id="w4">
        <input @click=${selectRow} type="button"value=" " id="w4" class ="w8">
        <input @click=${selectRow} type="button"value=" " id="w4" class ="w3">
    </div>
    <div class="word-horizontal" id="fift-word">
        <input @click=${selectRow} type="button"value=" " id="w5" class ="w2">
        <input @click=${selectRow} type="button"value=" " id="w5">
        <input @click=${selectRow} type="button"value=" " id="w5" class="w7">
        <input @click=${selectRow} type="button"value=" " id="w5">
        <input @click=${selectRow} type="button"value=" " id="w5">
        <input @click=${selectRow} type="button"value=" " id="w5">
    </div>
    <div class="word-vdrtical" id="sixt-word">
        <input @click=${selectRow} type="button"value=" " id="w6">
        <input @click=${selectRow} type="button"value=" " id="w6" class="w8">
        <input @click=${selectRow} type="button"value=" " id="w6">
    </div>
    <div class="word-vdrtical" id="sevent-word">
        <input @click=${selectRow} type="button"value=" " id="w7">
        <input @click=${selectRow} type="button"value=" " id="w7">
    </div>
    <div class="word-vdrtical" id="sevent-word-two">
        <input @click=${selectRow} type="button"value=" " id="w7">
    </div>
    <div class="word-horizontal" id="eigth-word">
        <input @click=${selectRow} type="button"value=" " id="w8">
        <input @click=${selectRow} type="button"value=" " id="w8">
    </div>
    <div class="word-horizontal" id="eigth-word-two">
        <input @click=${selectRow} type="button"value=" " id="w8">
    </div>
`

export function level1View(ctx){
   ctx.render(answerTemplate(level1Template(selectRow),submitFunc))


}
