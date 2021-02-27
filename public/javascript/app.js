document.cookie = "samesite=strict";


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


const portfolioCard = document.querySelectorAll(".portfolio");

function hoverEffect(el) {
    for(let i = 0; i < el.length; i++) {
        el[i].addEventListener("mouseover", function() {
            el[i].classList.add("hover-effect-card")
        })
      
        el[i].addEventListener("mouseout", function() {
            el[i].classList.remove("hover-effect-card")
        })
      }
}

hoverEffect(portfolioCard);