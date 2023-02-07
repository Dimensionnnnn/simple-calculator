const resultText = document.querySelector('.result')

const operations = {
    btnAdd: 0x0004,
    btnDiff: 0x0008,
    btnMltp: 0x0010,
    btnDvd: 0x00020
}

let currentOperation = undefined

const btns = document.querySelectorAll('.btn');
btns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        //if (currentOperation !== undefined) getLastButton(currentOperation)
        currentOperation = operations[btn.id]
        // btn.style.background = '#fff'
    })
})

const getLastButton = (currOper) => {
    let idElem = Object.keys(operations).find(key => operations[key] === currOper)
    // document.getElementById(idElem).style.background = '#000'
}

const getNumberById = (id) => {
    if (!id) return undefined

    let num = document.getElementById(id).value
    if (isNaN(num) || !num) {
        alert('Invalid number')
        return undefined
    }

    return Number(num)
}

const getResult = (fNumber, sNumber) => {
    let result = Infinity

    switch (currentOperation) {
        case operations.btnAdd: {
            result = add(fNumber, sNumber)
            break
        }

        case operations.btnDiff: {
            result = substract(fNumber, sNumber)
            break
        }

        case operations.btnMltp: {
            result = multiply(fNumber, sNumber)
            break
        }

        case operations.btnDvd: {
            result = divide(fNumber, sNumber)
            break
        }

        default: {
            alert('Invalid operation')
            break
        }
    }
    return result
}

const resolveBtn = document.querySelector('.btn-resolve')
resolveBtn.addEventListener('click', () => {
    let fNumber = getNumberById('inpA')
    if (fNumber === undefined) return

    let sNumber = getNumberById('inpB')
    if (sNumber === undefined) return

    let result = getResult(fNumber, sNumber)
    if (result === Infinity) alert('Invalid result')

    resultText.textContent = result
})

const add = (fNum, sNum) => fNum + sNum
const substract = (fNum, sNum) => fNum - sNum
const multiply = (fNum, sNum) => fNum * sNum
const divide = (fNum, sNum) => fNum / sNum