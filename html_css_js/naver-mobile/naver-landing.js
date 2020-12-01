
(() => {

    let searchBar = document.querySelector('.naver-input')
    let backBtn = document.querySelector('.hidden-search-area #back')

    let hideenSearchContainer = document.querySelector('.hidden-search-area')


    searchBar.addEventListener('click', () => {
        hideenSearchContainer.classList.add('active')
    })

    backBtn.addEventListener('click', () => {
        hideenSearchContainer.classList.remove('active')
    })
})();