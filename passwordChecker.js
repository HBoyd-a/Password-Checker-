// Password Checker - H & M 
const hasMinimumLength = /.{8,}/;
const hasUppercase = /[A-Z]/;
const hasLowercase = /[a-z]/;
const hasDigit = /[0-9]/;
const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|=]/;

function passwordChecker(password) {
    const lengthCheck = hasMinimumLength.test(password)
    const lowerCase = hasLowercase.test(password)
    const upperCase = hasUppercase.test(password)
    const digitCheck = hasDigit.test(password)
    const specialCheck = hasSpecialCharacter.test(password)

    if (!lengthCheck || !upperCase || !lowerCase || !digitCheck) {
        console.log('WEAK ')
    }
    if (lengthCheck && upperCase && lowerCase && digitCheck && !specialCheck) {
        console.log('MEDIUM')
    }
    if (lengthCheck && upperCase && lowerCase && digitCheck && specialCheck) {
        console.log('STRONG')
    }
}

passwordChecker('password') // should return weak 
passwordChecker('Sputnik999') // should return medium 
passwordChecker("Sputnik999!") // should return STRONG