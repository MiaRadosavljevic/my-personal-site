const translate = document.querySelectorAll(".scroll")

window.addEventListener('scroll', () => {
    let scroll=window.pageYOffset
    
    translate.forEach(element => {
        let speed = element.dataset.speed
        element.style.transform = `translateY(${scroll*speed}px)`
    })
})