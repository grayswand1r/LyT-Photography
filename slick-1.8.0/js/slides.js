    $(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
      });
      $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
	    nextArrow: '<button type="button" class="slick-next" style="position: absolute; bottom: 0; right: 0;"  id="next">Next</button>',
		prevArrow: '<button type="button" class="slick-prev" style="position: absolute; bottom: 0; left: 0; z-index: 99 !important;" id="prev">Previous</button>',
		focusOnChange: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
		speed: 500

      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });
	

$(window).keydown(function(e) {
  switch (e.keyCode) {
    case 39: // right arrow key
      e.preventDefault(); // avoid browser scrolling due to pressed key
      // TODO: go to previous image
	   $("#next").click();
      return;
    
    case 37: // left arrow key
      e.preventDefault();
      // TODO: go to next image
	  $("#prev").click();
      return;
  }
});


//document.querySelector('body > div > div > div.col-10 > section').id = 'y';
//document.getElementById("y").style.backgroundColor = "blue";

//document.getElementById('first').height = "363";
//var f=document.getElementById('tt').height;

//document.getElementById("new").innerHTML= f+"px";

//document.getElementById("y").style.height="280px";
//document.getElementById("y").style.backgroundColor = "blue";
