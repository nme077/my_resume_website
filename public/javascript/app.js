document.cookie = "samesite=strict";

$(document).ready(() => {
  $('.spinner-border').hide();


  // Slow scroll support for all browsers

  $('.nav-link, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 400);
  });

  
  // Toggle active class on navbar links
  $(".nav-link").click(function() {
    $(".nav-link").removeClass('active')
    $(this).addClass('active');
  });

  $(window).scroll(() => {
    const scrollPos = $(window).scrollTop();

    const projects = $("#projects").offset().top - 200;
    const education = $("#education").offset().top - 400;
    const experience = $("#experience").offset().top - 400;
    

    if(scrollPos < projects) {
      $('.active').removeClass('active');
      $('#skillsBtn').addClass('active');
    } else if(scrollPos > projects && scrollPos < education) {
      $('.active').removeClass('active');
      $('#portfolio').addClass('active');
    } else if(scrollPos > education && scrollPos < experience) {
      $('.active').removeClass('active');
      $('#educationBtn').addClass('active')
    } else {
      $('.active').removeClass('active');
      $('#experienceBtn').addClass('active')
    }
  })

  
  // Toggle edit mode on index page
  $('#edit-index').click(() => {
    $('#edit-index').toggleClass('active');
  });


// Add Qualification button actions
const qualificationHtml = (
  `
    <li class="qual-input">
      <div class="form-group">
        <textarea type="text" class="form-control" id="description" name="qualification[points]" placeholder="Skills" style="resize: none;"></textarea>
      </div>
      <div class="btn btn-danger remove-qual">X</div>
    </li>`);

$('#add-qual').click(() => {
  $('#qual-list').append(qualificationHtml);
});

$('#qual-list').on('click', '.remove-qual', (e) => {
  e.target.parentNode.remove();
});



});