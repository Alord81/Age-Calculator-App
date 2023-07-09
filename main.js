// GET INPUT FIELDS
let inputOfDay = document.querySelector("[data-name = 'Day']"),
    inputOfMonth = document.querySelector("[data-name = 'Month']"),
    inputOfYear = document.querySelector("[data-name='Year']");


// GET THE ERROR FIELDS
let errorOfDay = document.querySelector('.error-day'),
    errorOfMonth = document.querySelector('.error-month'),
    errorOfYear = document.querySelector('.error-year');


// GET THE OUTPUT FIELDS
const outputOfDay = document.querySelector('.days span'),
    outputOfMonth = document.querySelector('.months span'),
    outputOfYear = document.querySelector('.years span');



// Day
inputOfDay.addEventListener('input', () => {
    if (!isNaN(+inputOfDay.value) !== true || +inputOfDay.value > 31 || +inputOfDay.value === 0) {
        inputOfDay.parentElement.classList.add('error')
        errorOfDay.innerHTML = 'Must be valid date'
    } else {
        inputOfDay.parentElement.classList.remove('error')
        errorOfDay.innerHTML = ''
    }
})


// Month
inputOfMonth.addEventListener('input', () => {
    if (!isNaN(+inputOfMonth.value) !== true || +inputOfMonth.value > 12 || +inputOfMonth.value === 0) {
        inputOfMonth.parentElement.classList.add('error')
        errorOfMonth.innerHTML = 'Must be valid date'
    } else {
        inputOfMonth.parentElement.classList.remove('error')
        errorOfMonth.innerHTML = ''
    }
    if (+inputOfMonth.value === 4) {
        if (+inputOfDay.value > 30) {

        }
    }
})


// Year
inputOfYear.addEventListener('input', () => {
    let date = new Date;
    let thisYear = date.getFullYear()

    if (!isNaN(+inputOfYear.value) !== true || +inputOfYear.value > thisYear) {
        inputOfYear.parentElement.classList.add('error')
        errorOfYear.innerHTML = 'Must be valid date'
    } else {
        inputOfYear.parentElement.classList.remove('error')
        errorOfYear.innerHTML = ''
    }
})

function result() {
    if ((+inputOfDay.value.length === 0)) {
        inputOfDay.parentElement.classList.add('error')
        errorOfDay.innerHTML = 'This field is required'
    }


    if ((+inputOfMonth.value.length === 0)) {
        inputOfMonth.parentElement.classList.add('error')
        errorOfMonth.innerHTML = 'This field is required'
    }


    if ((+inputOfYear.value.length === 0)) {
        inputOfYear.parentElement.classList.add('error')
        errorOfYear.innerHTML = 'This field is required'
    }

    if (+inputOfMonth.value === 4 && +inputOfDay.value === 31) {
        inputOfDay.parentElement.classList.add('error')
        errorOfDay.innerHTML = 'Must be valid date'
    }

    if (errorOfDay.innerHTML === '' &&
        errorOfMonth.innerHTML === '' &&
        errorOfYear.innerHTML === '') {
        let date = new Date;
        // Day Output
        let thisDay = date.getUTCDate()
        if (+inputOfDay.value >= thisDay) {
            outputOfDay.innerHTML = -(thisDay - (+inputOfDay.value))
        } else if (+inputOfDay.value <= thisDay) {
            outputOfDay.innerHTML = (thisDay - (+inputOfDay.value))
        }

        // Month Output
        let thisMonth = date.getUTCMonth() + 1
        if (+inputOfMonth.value >= thisMonth) {
            outputOfMonth.innerHTML = (thisMonth + (12 - +inputOfMonth.value))
        } else if (+inputOfMonth.value <= thisMonth) {
            outputOfMonth.innerHTML = (thisMonth - (+inputOfMonth.value))
        }

        // Year Output 
        let thisYear = date.getFullYear()
        if (+inputOfYear.value <= thisYear) {
            if (+inputOfMonth.value >= thisMonth) {
                outputOfYear.innerHTML = (thisYear - (+inputOfYear.value)) + 1
            }
            outputOfYear.innerHTML = (thisYear - (+inputOfYear.value))
        }

    }
}