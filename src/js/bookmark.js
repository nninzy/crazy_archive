const bookmarkBtn = document.querySelector('.bookmark__add')
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
const bookmarkList = document.querySelector('.optional__bookmark-items')

const loadBookmark = () => {
    bookmarkList.innerHTML = ''
    bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
}

// 북마크 닫기
const closeBookmarkModal = () => {
    const modalBox = document.querySelector('.modal')
    modalBox.classList.add('d-none')
    document.querySelector('.modal__main form').remove()
}
// 북마크 입력값 받으면 bookmark 로컬스토리지 추가하기
const addBookmark = (event) => {
    event.preventDefault()
    const bookmarkNameInput = document.querySelector('.bookmark__input--name')
    const bookmarkUrlInput = document.querySelector('.bookmark__input--url')
    const name = bookmarkNameInput.value
    const url = bookmarkUrlInput.ariaValueNow
    const bookmark = {name, url}
    bookmarks.push(bookmark)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    bookmarkNameInput.value = ''
    bookmarkUrlInput.value = ''
    loadBookmark()
    displayBookmarks()
    closeBookmarkModal()
}

const renderBookmarkModal = () => {
    const bookmarkBox = document.querySelector('.modal--bookmark')
    const bookmarkTitle = bookmarkBox.querySelector('.modal__title')
    const bookmarkMain = bookmarkBox.querySelector('.modal__main')

    bookmarkTitle.textContent = '북마크 추가'

    const bookmarkForm = document.createElement('form')

    const bookmarkURLContainer = document.createElement('div')
    bookmarkURLContainer.classList.add('bookmark__main__container')
    const bookmarkURLkey = document.createElement('div')
    bookmarkURLkey.classList.add('bookmark__label')
    bookmarkURLkey.textContent = '추가할 URL'
    bookmarkURLContainer.appendChild(bookmarkURLkey)
    const bookmarkURLinput = document.createElement('input')
    bookmarkURLinput.classList.add('bookmark__input--url')
    bookmarkURLinput.setAttribute('type', 'url')
    bookmarkURLinput.setAttribute('required', 'true')
    bookmarkURLinput.setAttribute('placeHolder', 'URL을 입력해주세요.')
    bookmarkURLContainer.appendChild(bookmarkURLinput)
    
    const bookmarkNameContainer = document.createElement('div')
    bookmarkNameContainer.classList.add('bookmark__main__container')
    const bookmarkNamekey = document.createElement('div')
    bookmarkNamekey.classList.add('bookmark__label')
    bookmarkNamekey.textContent = '보여질 이름'
    bookmarkNameContainer.appendChild(bookmarkNamekey)
    const bookmarkNameinput = document.createElement('input')
    bookmarkNameinput.classList.add('bookmark__input--name')
    bookmarkNameinput.setAttribute('type', 'text')
    bookmarkNameinput.setAttribute('required', 'true')
    bookmarkNameinput.setAttribute('placeHolder', '10자 이내로 입력해주세요.')
    bookmarkNameContainer.appendChild(bookmarkNameinput)

    const bookmarkSubmitBtn = document.createElement('button')
    bookmarkSubmitBtn.classList.add('bookmark__btn', 'bookmark__btn--submit')
    bookmarkSubmitBtn.setAttribute('type', 'submit')
    bookmarkSubmitBtn.textContent = '확 인'

    const bookmarkCancelBtn = document.querySelector('.modal__cancel-btn')
    bookmarkCancelBtn.classList.add('bookmark__btn', 'bookmark__btn--cancel')
    bookmarkCancelBtn.textContent = '취 소'

    bookmarkForm.appendChild(bookmarkURLContainer)
    bookmarkForm.appendChild(bookmarkNameContainer)
    bookmarkForm.appendChild(bookmarkSubmitBtn)
    bookmarkMain.appendChild(bookmarkForm)
    bookmarkMain.appendChild(bookmarkCancelBtn)

    bookmarkCancelBtn.addEventListener('click', closeBookmarkModal)
    bookmarkSubmitBtn.addEventListener('click', addBookmark)
}

const openBookmarkModal = () => {
    const bookmarkBox = document.querySelector('.modal')
    bookmarkBox.classList.add('modal--bookmark')
    renderBookmarkModal()
    bookmarkBox.classList.remove('d-none')
}

// 추가한 bookmark 페이지에 보이기
const removeBookmark = (index) => {
    bookmarks.splice(index, 1)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    loadBookmark()
    displayBookmarks()
}
const displayBookmarks = () => {
    bookmarks.forEach((item, index) => {
        const liEl = document.createElement('li')
        liEl.classList.add('bookmark__item')
        const aEl = document.createElement('a')
        aEl.setAttribute('href', item.url)
        aEl.textContent = item.name

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('del-bookmark-btn')
        deleteBtn.textContent = 'X'
        deleteBtn.addEventListener('click', () => {
            removeBookmark(index)
        })
        liEl.appendChild(aEl)
        liEl.appendChild(deleteBtn)
        bookmarkList.appendChild(liEl)
    })
}

loadBookmark()
displayBookmarks()
bookmarkBtn.addEventListener('click', openBookmarkModal)
