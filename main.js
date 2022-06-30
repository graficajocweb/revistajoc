addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click',() => {
            const munu_itemls = document.querySelector('.munu_itemls')
            munu_itemls.classList.toggle('show')

        })
    }
})