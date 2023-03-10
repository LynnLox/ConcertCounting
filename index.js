//console and document are objects
let countEl = document.getElementById("count-el")
//Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}

function decrement(){
    if (count>0){
        count -= 1
        countEl.innerText = count
    }
}

function save(){
    // saveEl.innerText += count
    // saveEl.innerText +=" - "
    let saveCtr = ' ' + count + ' - '
    saveEl.innerText += saveCtr
}
