$(function() {
  $('#start').click(function() {
    $('form').slideDown();
    event.preventDefault();
  });
  $('form').submit(function(){
    var q1 = parseInt($('input[name=q1]:checked').val())
    var q2 = parseInt($('input[name=q2]:checked').val())
    var q3 = parseInt($('input[name=q3]:checked').val())
    var q4 = parseInt($('input[name=q4]:checked').val())
    var q5 = parseInt($('input[name=q5]:checked').val())
    var points = q1 + q2 + q3 + q4 + q5;
    var program;
    $('#rr').slideUp();
    $('#pd').slideUp();
    $('#ja').slideUp();
    $('#cd').slideUp();
    $('#cn').slideUp();
    if (points <= 2) {
      $('#rr').slideDown();
    } else if (points >= 3 && points <= 4) {
      $('#pd').slideDown();
    } else if (points >= 5 && points <= 6) {
      $('#ja').slideDown();
    } else if (points >= 7 && points <= 8) {
      $('#cd').slideDown();
    } else if (points >= 9) {
      $('#cn').slideDown();
    } else {
      console.log('we have a problem');
    }
    event.preventDefault();
    $('form').slideUp();
  });
})
