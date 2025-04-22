const HEADER = `
<header>
    <h1>Ethan Mensior</h1>
    <nav>
        <a href="homePage.html"><button>Home</button></a>
        <a href=""><button>Certifications</button></a>
        <a href=""><button>Contact Me!</button></a>
        <a href=""><button>Resume + Transcript</button></a>
    </nav>

</header>
`

const FOOTER = `
<footer>
    <p>&copy 2025 Ethan Mensior, Meridian Technical Charter High school</p>

</footer>
`
// add a github button and a linked in button

// <i style="font-size:2rem" class="fa">&#xf08c;</i>
// <a href="https://www.linkedin.com/in/ethan-mensior/"><i style="font-size:2rem" class="fa">&#xf09b;</i></a>


window.onload = function() {
   let header = document.createElement('div')
   document.querySelector('body').prepend(header)
   header.outerHTML = HEADER

   let footer = document.createElement('div')
   document.querySelector('body').append(footer)
   footer.outerHTML = FOOTER
}


