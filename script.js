const btn1 = document.getElementById('qst1');
const btn2 = document.getElementById('qst2');
const btn3 = document.getElementById('qst3');
const btn4 = document.getElementById('qst4');
const btn5 = document.getElementById('qst5');
const btn6 = document.getElementById('qst6');

let list = document.querySelectorAll('.question');

btn1.addEventListener("click", destroy);
btn2.addEventListener("click", destroy);
btn3.addEventListener("click", destroy);
btn4.addEventListener("click", destroy);
btn5.addEventListener("click", destroy);
btn6.addEventListener("click", destroy);

function destroy(){
    // list.forEach(answer => {
    for(var i=0;i<list.length;i++){
        var answer = list[i];
        if(answer.lastElementChild.style.display == 'block' && answer.firstElementChild != this){
            answer.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
            answer.lastElementChild.style.display = "none";
        }
    }
    let element = this.nextElementSibling;
    if(element.style.display == "none"){
        this.lastElementChild.style.transform = "rotate(45deg)";
        element.style.display = "block";
    }else{
        this.lastElementChild.style.transform = "rotate(0deg)";
        element.style.display = "none";
    }
}
