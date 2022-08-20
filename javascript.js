function add(numberOne,numberTwo){
    numberOne = parseInt(numberOne)
    numberTwo = parseInt(numberTwo)
    return numberOne + numberTwo
}

function subtract(numberOne,numberTwo){
    numberOne= parseInt(numberOne)
    numberTwo= parseInt(numberTwo)
    return numberOne-numberTwo
}

function multiply(numberOne,numberTwo){
    numberOne=parseInt(numberOne)
    numberTwo=parseInt(numberTwo)
    return numberOne*numberTwo
}

function divide(numberOne,numberTwo){
    numberOne = parseInt(numberOne)
    numberTwo = parseInt(numberTwo)
    return numberOne/numberTwo
}

function operate(numberOne,operator,numberTwo){
    switch(operator){
        case '+':
            return (add(numberOne,numberTwo))
        case '-':
            return (subtract(numberOne,numberTwo))
        case '*':
            return(multiply(numberOne,numberTwo))
        case '/':
            return (divide(numberOne,numberTwo))
    }
}



let displayOperations = document.querySelector('.results');
let buttons = document.querySelectorAll('button');


let results = buttons.forEach(obj=>{
    obj.addEventListener('click',()=>{
        if(obj.textContent != 'C' && obj.textContent != '='){
            displayOperations.textContent += obj.textContent
        }
        else if(obj.textContent === 'C' && obj.textContent != '='){
            displayOperations.textContent = ''
        }
    })
})
