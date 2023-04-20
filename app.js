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

let generateQuoteBtn = document.querySelector('#generate-quote');
let quoteText = document.querySelector('#quote-text');
let quoteAuthor = document.querySelector('#quote-author');

let handleCopyClick = document.querySelector('#copy-quote');

generateQuoteBtn.addEventListener('click', () => {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
    });
});

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("CopyInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  } 

//document.onkeydown = function ()
//{
//if(event.keyCode==123) //F12 key 123, F11 key 122
//{
//event.keyCode = 0;
//event.returnValue = false;
//event.cancelBubble = true;
//return false;
//}
//} 