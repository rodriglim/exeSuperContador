let res = document.getElementById('number');

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

function $cleanInput(){
    res.innerHTML = '';
}