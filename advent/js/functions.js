/**
 * Let it snow!!
 */
$.fn.snow();

/**
 * Navigation menu and notes
 */
$('.about-link, .notes-link').click(function() {
  $('.notes').addClass('active').removeClass('hidden');
  if ($(this).attr('class') === 'about-link') {
    $('.about').addClass('active').removeClass('hidden');
  } else if ($(this).attr('class') === 'notes-link') {
    $('.design-notes').addClass('active').removeClass('hidden');
  }
});
$('section, .close-notes').click(function() {
  $('.notes, .about, .design-notes').removeClass('active').addClass('hidden');
});

/* Prev/Next Buttons */
$('.day-list li').click(function() {
  $('.day-list li').removeClass('active').removeClass('today');
  $(this).addClass('active');
});

// Get width of the view area in pixels
var width = $('.day').width();

// Prev button
$('.prev').click(function() {
  var pos = $('#container #inner').css("margin-left");
  pos = pos.slice(0, -2);
  if (pos === '0') {
    $('#container #inner').css("margin-left", "-2400vw");
  } else {
    var offset = parseInt(pos) + width;
    $('#container #inner').css("margin-left", offset + "px");
  }
});

// Next button
$('.next').click(function() {
  var pos = $('#container #inner').css("margin-left");
  pos = pos.slice(0, -2);
  if (pos >= width * 25) {
    $('#container #inner').css("margin-left", "-0vw");
  } else {
    var offset = parseInt(pos) - width;
    $('#container #inner').css("margin-left", offset + "px");
  }
});

/**
 * Date Countdown timer
 */
function timeToXmas() {
  var today = new Date();
  var christmas = new Date(today.getFullYear(), 11, 25); // December 25
  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  var diff = christmas - today;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}

function countdownTimer() {
  var time = timeToXmas();
  $('#days .number').text(time.days);
  $('#hours .number').text(time.hours);
  $('#minutes .number').text(time.mins);
  $('#seconds .number').text(time.secs);
  setTimeout(countdownTimer, 1000);
}

$(document).ready(function() {
  $('.present').click(function() {
    // Close other presents
    $('.present').removeClass('selected');
    $('.content').hide();

    // Highlight the selected present
    $(this).addClass('selected');

    // Display the content for the selected day
    var dayId = $(this).closest('section').attr('id');
    $('#content-' + dayId).show();
  });

  // Start the countdown timer
  countdownTimer();
});
