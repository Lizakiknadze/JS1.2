var i = 0
function clickOnbutton() {
    if (i < 10){
        document.getElementById('number').value = ++i
    }
    else{
        document.getElementById('number').value = --i
    }
    }
   