
const campos = document.querySelector('#principal-input')
const spans = document.querySelector('.span-required')
const dangerIcon = document.querySelector('.danger-icon')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(){
        dangerIcon.style.opacity = 1
        spans.style.display = 'block'
        campos.style.border = '1px solid #e63636'
}

function validate(){
    dangerIcon.style.opacity = -1
        spans.style.display = 'none'
        campos.style.border = ''
}

function validateEmail(){
    if (campos.value.length < 6){
        setError()
    }

     if(!emailRegex.test(campos.value)){
        setError()
    }
   
    else{
        validate()
    }
}


