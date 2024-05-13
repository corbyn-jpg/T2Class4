function clearScreen(){
    document.getElementById('result').value = "";
}

function display(value){
    document.getElementById('result').value += value;
}

function calculate(){
    let sum = document.getElementById('result').value;
    let answer = eval(sum);
    document.getElementById('result').value = answer;
}

let form = document.forms['my-form'];
form.addEventListener("submit", getValues);

function getValues(event){
    event.preventDefaults();

    let formData = {
        "name": this.name.value;
        "bio": this.bio.value;
        "favColour": this['fav-color'].value;
        "gender": this.gender.value;
    }
}