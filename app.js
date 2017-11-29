$(document).ready(function() {
  console.log("Javascript is alive!");

  $('#greeting').text("Hello, World!");

  $('li').css('background-color', 'yellow');

  let img = $('<img />').attr({
    'src': `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`
  }).appendTo('#greeting')
  $('li')

  itemImages = {
  0: "./images/milk.jpeg",
  1: "./images/honey.jpeg",
  2: "./images/water.jpeg",
  3: "./images/wine.jpeg",
  4: "./images/beer.jpeg"}

  let listItems = document.querySelectorAll('li')
  for (let i = 0; i < listItems.length; i++) {
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

  $('#ghosting').on('mouseover', function() {
    $('#ghosting').remove('#ghosting')
  })
  $('#resize').on('mouseover', function() {
    let oldWidth = $('#resize').width()
    $('#resize').on('mouseleave', function() {
      $("#resize").width(oldWidth)
    })
    $("#resize").width(oldWidth * 2)
  })
})
