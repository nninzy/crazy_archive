const googleBox = document.querySelector('.search-google')
const googleLabel = googleBox.querySelector('label')
const googleForm = googleBox.querySelector('.search__form')
const googleInput = googleForm.querySelector('.g-search__input')
const googleSubmit = googleForm.querySelector('.g-search__submit')

const toggleGoogleForm = () => {
    googleInput.classList.toggle('d-none')
    googleSubmit.classList.toggle('d-none')
}


googleLabel.addEventListener('click', toggleGoogleForm)