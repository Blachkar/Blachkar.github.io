const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    
    loader.classList.add('fondu-out');
    
})

const pagecontent = document.querySelector('h1')

new Typewriter(pagecontent, {
    //loop: true,
})
.changeDelay(50)
.typeString('Hey. <stron>Je suis</strong>')
.pauseFor(450)
.typeString('<strong> <br>Lachakr Bilal</strong>.')
.pauseFor(450)
.deleteChars(14)
.typeString('<span style="color: #ad8ded">Lachakr</span> <strong>Bilal</strong>')
.pauseFor(450)
.deleteChars(5)
.typeString('<span style="color: #393939">Bilal.</span>')
.start()
