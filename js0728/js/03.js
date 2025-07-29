let nav = document.querySelector('nav');
let navLink = document.querySelectorAll('nav ul li a');
// 頁面捲動時(監聽整個畫面所以是監看視窗，用window)
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset != 0) {
        nav.style.backgroundColor = "rgba(0,0,0,.8)"
        navLink.forEach(a => {
            a.style.color = '#fff';
        });
    } else {
        nav.style.backgroundColor = "#ecb1da";
        navLink.forEach(a => {
            a.style.color = "333";
        });
    }

})