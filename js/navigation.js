const menuButton = document.querySelector('.menu-mobile')

// toggle menu
menuButton.addEventListener('click', toggleNavigation)

function toggleNavigation() {
    document.querySelector('nav .links').classList.toggle('active')


    if(menuButton.innerText.trim() == "&Congruent;") {
        menuButton.innerText = "&Cross;"
    } 
    
    else if(menuButton.innerText.trim() == "&Cross;") {
        menuButton.innerText = "&Congruent;"
    }
}