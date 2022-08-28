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

let operator= ''
let firstNumber = null
let secondNumber = null


let numbers = buttons.forEach(obj=>{
    obj.addEventListener('click',()=>{
        if(!isNaN(obj.textContent)){
            if(operator === '') {
                displayOperations.textContent += obj.textContent
                firstNumber= +displayOperations.textContent
            }
            else{
                displayOperations.textContent += obj.textContent
                secondNumber = +displayOperations.textContent
            }
        }
        else if(obj.textContent === 'C' && obj.textContent != '='){
            displayOperations.textContent = ''
            operator=''
            firstNumber = null
            secondNumber = null
        }
        else if(isNaN(obj.textContent) && obj.textContent!= '='){
            operator=obj.textContent
            displayOperations.textContent=''
        }
        else if(obj.textContent=== '='){
            displayOperations.textContent=operate(firstNumber,operator,secondNumber)
            firstNumber = +displayOperations.textContent
        }
    })
})
