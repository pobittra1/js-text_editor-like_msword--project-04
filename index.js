
const textareaText = document.getElementById('textarea-text');
const textareaTextValue = textareaText.value;

function bold(){
    textareaText.classList.toggle("bold");
}
function italic(){
    textareaText.classList.toggle("italic");
}
function underline(){
    textareaText.classList.toggle("underline");
}
function leftAlign(){
    textareaText.classList.toggle("leftAlign");
}
function centerAlign(){
    textareaText.classList.toggle("centerAlign");
}
function rightAlign(){
    textareaText.classList.toggle("rightAlign");
}
function justifyAlign(){
    textareaText.classList.toggle("justifyAlign");
}

function fontSize(){
    const fontSize = document.getElementById("fontSize");
    textareaText.style.fontSize = fontSize.value +"px" ;
    
}
function colorField(){
    const colorField = document.getElementById("colorField");
    textareaText.style.color = colorField.value ;
}