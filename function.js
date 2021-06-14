function btnclick(val){
    document.getElementById("calcScreen").value=
        document.getElementById("calcScreen").value + val;
}

function clearButton(){
    document.getElementById("calcScreen").value = "";
}

function equalsButton(){
    let text = document.getElementById("calcScreen").value;
    let result = eval(text);
    document.getElementById("calcScreen").value = result;
}

