console.log("Javascript is alive!");
document.getElementById('greeting').innerHTML = "Hello, World!";

let newImage = document.createElement("img")
newImage.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
document.getElementById(greeting.append(newImage))

itemImages = {
  0: "./images/milk.jpeg",
  1: "./images/honey.jpeg",
  2: "./images/water.jpeg",
  3: "./images/wine.jpeg",
  4: "./images/beer.jpeg"}

let listItems = document.querySelectorAll('li')
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = "yellow";
  listItems[i].addEventListener('click', function() {
    if (this.className !== 'selected') {
      this.className = "selected"
      document.querySelectorAll('img')[1].src = itemImages[i]
    }
    for (let j = 0; j < listItems.length; j++) {
      if (j !== i) listItems[j].className = ""
    }
  })
}

let remove = document.getElementById('ghosting')
remove.addEventListener('mouseover', function() {
  remove.parentNode.removeChild(remove)
})

let twiceTheWidth = document.getElementById('resize')
twiceTheWidth.addEventListener('mouseenter', function() {
  twiceTheWidth.style.width = `${twiceTheWidth.scrollWidth * 2}px`
  })
  twiceTheWidth.addEventListener('mouseout', function() {
    twiceTheWidth.style.width = `${twiceTheWidth.scrollWidth / 2}px`
})
