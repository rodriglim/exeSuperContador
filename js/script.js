let res = document.getElementById('number');
var $span = document.getElementById('dark-span');
function $getInput($index) {
    return document.getElementsByName('inputBox')[$index].value;
}

function $isEmpty() {
    let $isValidation = 3;

    for (let $count = 0; $count < 3; $count++) {
        if (!$getInput($count) == '') {
            $isValidation--;
        }
    }

    return $isValidation == 0 ? true : false;
}

function $isStepValidation() {
    let $step = Number($getInput(2) == 0 ? 1 : $getInput(2));
    return $step;

}

function $isCount() {
    let $start = Number($getInput(0)), $end = Number($getInput(1));
    let $step = $isStepValidation();

    if ($start > $end) {
        for (let $count = $start; $count >= $end; $count -= $step) {
            res.innerHTML += `${$count} \u{1F449}`;
        }
        
    } else {
        for (let $count = $start; $count <= $end; $count += $step) {
            res.innerHTML += `${$count} \u{1F449}`;
        }
    }
    res.innerHTML += `\u{1F3C1}`;


}

function $toSend() {
    if($isEmpty()){
        $isCount();
    }else{
        alert('Field(s) Empty(s)!!!');
    }
}

function $colorBackground(){

    var $body = document.getElementById('body');
    var $colorBack = getComputedStyle($body).backgroundColor;

    if($colorBack == 'rgb(23, 131, 233)'){
        $span.innerHTML = '&#9728;&#65039;';

    }else{
        $span.innerHTML = '	&#127761;';
    }
}

function $dark(){
    var $body = document.getElementById('body');
    var $container = document.querySelector('#section');
    var $colorBack = getComputedStyle($body).backgroundColor;

    if($colorBack == 'rgb(23, 131, 233)'){
        $body.style.background = 'black';
        $container.style.color = '#FFF'
        $container.style.background = 'black';
        $span.innerHTML = '&#9728;&#65039;';


    }else{
        $body.style.background = 'rgb(23, 131, 233)';
        $container.style.color = '#000'
        $container.style.background = '#FFF';
        $span.innerHTML = '	&#127761;';



    }
}

function $cleanInput(){
    res.innerHTML = '';
}