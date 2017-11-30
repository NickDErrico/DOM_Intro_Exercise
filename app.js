$(document).ready(function() {
  console.log("Javascript is alive!");

  $('#greeting').text("Hello, World!");

  $('li').css('background-color', 'yellow');

  let img = $('<img />').attr({
    'src': `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`
  }).appendTo('#greeting')
  $('li')

  $("li").on('click', function() {
    $('li').removeClass('selected')
    $(this).addClass('selected')
    $('img:eq(1)').attr('src', "./images/" + $(this).text() + ".jpeg")
  })

  // let listItems = document.querySelectorAll('li')
  // for (let i = 0; i < listItems.length; i++) {
  //   listItems[i].addEventListener('click', function() {
  //     if (this.className !== 'selected') {
  //       this.className = "selected"
  //       document.querySelectorAll('img')[1].src = itemImages[i]
  //     }
  //     for (let j = 0; j < listItems.length; j++) {
  //       if (j !== i) listItems[j].className = ""
  //     }
  //   })
  // }

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

  $("#reset").on('click', function() {
    $("li").removeClass('selected')
    $("img:eq(1)").attr('src', "./images/panic.jpeg")
  })
})

$('html').keypress(function(event) {
   if (event.keyCode >= 48 && event.keyCode <= 57) {
     alert("I HATE NUMBERZZZ!");
   };
})

neededkeys = [38,38,40,40,37,39,37,39,66,65], started = false, count = 0;
$(document).keydown(function(e){
	key = e.keyCode;
	//Set start to true only if having pressed the first key in the konami sequence.
	if(!started){
		if(key == 38){
			started = true;
		}
	}
	//If we've started, pay attention to key presses, looking for right sequence.
	if(started){
		if(neededkeys[count] == key){
			//We're good so far.
			count++;
		} else {
			//Oops, not the right sequence, lets restart from the top.
			reset();
		}
		if(count == 10){
			//We made it! Put code here to do what you want when successfully execute konami sequence
      alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!")
			//Reset the conditions so that someone can do it all again.
			reset();
		}
	} else {
	//Oops.
		reset();
	}
});
//Function used to reset us back to starting point.
function reset() {
	started = false; count = 0;
	return;
}
